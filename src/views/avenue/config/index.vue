<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import avenueConfig from '@/api/avenue/avenueConfig'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()




const options = reactive({
  id: 'avenue_config',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationColumnWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 700
  },
  api: avenueConfig.getList,
  edit: {
    show: true,
    api: avenueConfig.update,
    auth: ['avenue:config:update']
  }
})

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入ID"
    }
  },
  {
    title: "配置编码",
    dataIndex: "code",
    formType: "input",
    search: true,
    addDisplay: true,
    editDisplay: true,
    disabled: true,
  },
  {
    title: "说明",
    dataIndex: "desc",
    formType: "input",
    search: true,
    addDisplay: false,
    commonRules: {
      required: true,
      message: "请输入说明"
    }
  },
  // {
  //   title: "配置管理是否显示：0否1是",
  //   dataIndex: "is_show",
  //   formType: "select",
  //   search: true,
  //   addDisplay: false,
  //   commonRules: {
  //     required: true,
  //     message: "请输入配置管理是否显示：0否1是"
  //   }
  // },
  {
    title: "配置值",
    dataIndex: "value",
    formType: "editor",
    addDisplay: false,
    commonRules: {
      required: true,
      message: "请输入配置值"
    }
  },
  // {
  //   title: "创建时间",
  //   dataIndex: "created_at",
  //   formType: "date",
  //   addDisplay: false,
  //   editDisplay: false,
  //   commonRules: {
  //     required: true,
  //     message: "请输入创建时间"
  //   },
  //   showTime: true
  // },
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
<script> export default { name: 'avenue:config' } </script>