<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <!-- <template #textcolor="{ record }">
        <a-tag :color="record.textcolor">{{ record.textcolor }}</a-tag>
      </template> -->

      <template #title="{ record }">
        <a-tag :color="record.color" :style="'color:' + record.textcolor + ';'">{{ record.title }}</a-tag>
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import avenueTag from '@/api/avenue/avenueTag'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const options = reactive({
  id: 'avenue_tag',
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
  api: avenueTag.getList,
  add: {
    show: true,
    api: avenueTag.save,
    auth: ['avenue:tag:save']
  },
  edit: {
    show: true,
    api: avenueTag.update,
    auth: ['avenue:tag:update']
  },
  delete: {
    show: true,
    api: avenueTag.deletes,
    auth: ['avenue:tag:delete']
  }
})

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    width: 20,
    commonRules: {
      required: true,
      message: "请输入ID"
    }
  },
  {
    title: "标签名",
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
    hide: true,
    commonRules: {
      required: true,
      message: "请选择文本颜色"
    }
  },
  {
    title: "背景颜色",
    dataIndex: "color",
    formType: "color-picker",
    dict: {tagColor: true, translation: true},
    hide: true,
    commonRules: {
      required: true,
      message: "请选择背景颜色"
    }
  },
  {
    title: "排序",
    dataIndex: "sort",
    formType: "input-number",
    commonRules: {
      required: true,
      message: "请输入排序"
    }
  },
  {
    title: "标签类型",
    dataIndex: "type",
    formType: "select",
    search: true,
    dict: {data: [{label: '产品', value: '0'}, {label: '文章', value: '1'}], translation: true},
    commonRules: {
      required: true,
      message: "请选择标签类型"
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
<script> export default { name: 'avenue:tag' } </script>