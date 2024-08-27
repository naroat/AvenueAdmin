<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <!-- textcolor -->
      <template #textcolor="{ record }">
        <div :style="{'background-color': record.textcolor}" style="width: 100%; height: 18px;"></div>
      </template>

      <!-- color -->
      <template #color="{ record }">
        <div :style="{'background-color': record.color}" style="width: 100%; height: 18px;"></div>
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import avenueProductTag from '@/api/avenue/avenueProductTag'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()

const options = reactive({
  id: 'avenue_product_tag',
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
  api: avenueProductTag.getList,
  add: {
    show: true,
    api: avenueProductTag.save,
    auth: ['avenue:productTag:save']
  },
  edit: {
    show: true,
    api: avenueProductTag.update,
    auth: ['avenue:productTag:update']
  },
  delete: {
    show: true,
    api: avenueProductTag.deletes,
    auth: ['avenue:productTag:delete']
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
    title: "名称",
    dataIndex: "title",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入名称"
    }
  },
  {
    title: "文本颜色",
    dataIndex: "textcolor",
    formType: "color-picker",
    commonRules: {
      required: true,
      message: "请输入文本颜色"
    }
  },
  {
    title: "背景颜色",
    dataIndex: "color",
    formType: "color-picker",
    commonRules: {
      required: true,
      message: "请输入背景颜色"
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
<script> export default { name: 'avenue:productTag' } </script>