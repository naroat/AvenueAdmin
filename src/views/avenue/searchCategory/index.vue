<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import avenueSearchCategory from '@/api/avenue/avenueSearchCategory'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  avenueSearchCategory.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  avenueSearchCategory.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'avenue_search_category',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationColumnWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: avenueSearchCategory.getList,
  // recycleApi: avenueSearchCategory.getRecycleList,
  add: {
    show: true,
    api: avenueSearchCategory.save,
    auth: ['avenue:searchCategory:save']
  },
  edit: {
    show: true,
    api: avenueSearchCategory.update,
    auth: ['avenue:searchCategory:update']
  },
  delete: {
    show: true,
    api: avenueSearchCategory.deletes,
    auth: ['avenue:searchCategory:delete'],
    realApi: avenueSearchCategory.realDeletes,
    realAuth: ['avenue:searchCategory:realDeletes']
  },
  recovery: {
    show: true,
    api: avenueSearchCategory.recoverys,
    auth: ['avenue:searchCategory:recovery']
  },
  import: {
    show: false,
    url: 'avenue/searchCategory/import',
    templateUrl: 'avenue/searchCategory/downloadTemplate',
    auth: ['avenue:searchCategory:import']
  },
  export: {
    show: false,
    url: 'avenue/searchCategory/export',
    auth: ['avenue:searchCategory:export']
  }
})

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: false,
    commonRules: {
      required: true,
      message: "请输入"
    }
  },
  {
    title: "分类名称",
    dataIndex: "title",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入分类名称"
    }
  },
  {
    title: "排序",
    dataIndex: "sort",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入排序"
    }
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: false,
    commonRules: {
      required: true,
      message: "请输入创建时间"
    },
    showTime: true
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入更新时间"
    },
    showTime: true
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'avenue:searchCategory' } </script>