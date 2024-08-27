<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <!-- logo列 -->
      <template #logo="{ record }">
        <a-avatar>
          <img :src="record.logo ? record.logo : $url + 'avatar.jpg'" style="object-fit: cover" />
        </a-avatar>
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import avenueProduct from '@/api/avenue/avenueProduct'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()




const options = reactive({
  id: 'avenue_product',
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
  api: avenueProduct.getList,
  add: {
    show: true,
    api: avenueProduct.save,
    auth: ['avenue:product:save']
  },
  edit: {
    show: true,
    api: avenueProduct.update,
    auth: ['avenue:product:update']
  },
  delete: {
    show: true,
    api: avenueProduct.deletes,
    auth: ['avenue:product:delete']
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
      message: "请输入ID"
    }
  },
  {
    title: "名称",
    dataIndex: "title",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入名称"
    }
  },
  // {
  //   title: "描述",
  //   dataIndex: "desc",
  //   formType: "input",
  // },
  {
    title: "logo",
    dataIndex: "logo",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入logo"
    }
  },
  {
    title: "链接",
    dataIndex: "link",
    formType: "input",
    hide: false,
    commonRules: {
      required: true,
      message: "请输入链接"
    }
  },
  {
    title: "分类",
    dataIndex: "cate_id",
    formType: "select",
    search: true,
    dict: {translation: true, url: 'avenue/productCategory/index?is_all=1', props: { label: 'title', value: 'id' } },
    commonRules: {
      required: true,
      message: "请选择分类"
    }
  },
  {
    title: "标签",
    dataIndex: "tags",
    formType: "select",
    search: true,
    multiple:true,
    dict: {translation: true, url: 'avenue/productTag/index?is_all=1', props: { label: 'title', value: 'id' } },
    commonRules: {
      required: true,
      message: "请选择标签"
    }
  },
  {
    title: "排序",
    dataIndex: "sort",
    formType: "input",
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
<script> export default { name: 'avenue:product' } </script>