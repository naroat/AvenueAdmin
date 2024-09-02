<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import avenueArticle from '@/api/avenue/avenueArticle'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()




const options = reactive({
  id: 'avenue_article',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationColumnWidth: 160,
  formOption: {
    viewType: 'tag',
    width: 600,
    tagId: 'article',
    tagName: '文章',
    titleDataIndex: 'title'
  },
  api: avenueArticle.getList,
  add: {
    show: true,
    api: avenueArticle.save,
    auth: ['avenue:article:save']
  },
  edit: {
    show: true,
    api: avenueArticle.update,
    auth: ['avenue:article:update']
  },
  delete: {
    show: true,
    api: avenueArticle.deletes,
    auth: ['avenue:article:delete']
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
    title: "描述",
    dataIndex: "desc",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入描述"
    }
  },
  {
    title: "内容",
    dataIndex: "content",
    formType: "editor",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入内容"
    }
  },
  {
    title: "分类",
    dataIndex: "cate_id",
    formType: "select",
    search: true,
    dict: {url: 'avenue/articleCategory/index', params: { onlyMenu: true } , props: { label: 'title', value: 'id' }},
    commonRules: {
      required: true,
      message: "请选择分类"
    }
  },
  {
    title: "点击数",
    dataIndex: "click",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入点击数"
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
<script> export default { name: 'avenue:article' } </script>