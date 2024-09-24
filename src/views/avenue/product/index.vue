<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
        <!-- logo列 -->
        <template #logo="{ record }">
          <a-image
            width="20"
            :src="record.logo"
          />
        </template>
        <!-- link列 -->
        <template #link="{ record }">
          <a-link :href="record.link" target="_blank">{{ record.link }}</a-link>
        </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive, shallowRef } from 'vue'
import avenueProduct from '@/api/avenue/avenueProduct'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'
import { request } from '@/utils/request'

const crudRef = ref()
const requestData = [
  
]

//获取产品信息
const fetchProduct = async (maFormObject) => {
  // console.log(maFormObject.formModel.value)
  // console.log(maFormObject.getColumnService)
  // console.log(maFormObject.columns.value)

  // maFormObject.formModel.value.title = '111'
  // maFormObject.formModel.value.logo = '111'
  // maFormObject.formModel.value.desc = '111'
  const params = {
    url: maFormObject.formModel.value.link
  }
  const data =  await avenueProduct.fetchProduct(params)
  maFormObject.formModel.value.title = data.data.title
  maFormObject.formModel.value.logo = data.data.logo
  maFormObject.formModel.value.desc = data.data.desc
}

const statusList = ref([
  {
    id: 0,
    value: '关闭',
  },
  {
    id: 1,
    value: '开启',
  },
  {
    id: 2,
    value: '审核中',
  }
])

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
    commonRules: {
      required: true,
      message: "请输入ID"
    }
  },
  {
    title: "链接",
    dataIndex: "link",
    formType: "input",
    width: 200,
    commonRules: {
      required: true,
      message: "请输入链接"
    }
  },
  {
    title: "获取信息",
    dataIndex: "fetch_product",
    formType: "button",
    onClick: (maFormObject) => {
      fetchProduct(maFormObject)
    },
    hide: true,
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
    formType: "textarea",
    commonRules: {
      required: true,
      message: "请输入描述"
    }
  },
  {
    title: "logo",
    dataIndex: "logo",
    formType: "upload",
    dict: {type: 'image'},
    requestData:  {onlyUrl: true, path: 'product/logo'},
    commonRules: {
      required: true,
      message: "请输入logo"
    }
  },
  {
    title: "分类",
    dataIndex: "cate_id",
    formType: "select",
    search: true,
    dict: {url: 'avenue/productCategory/index', params: { onlyMenu: true } , props: { label: 'title', value: 'id' }, translation: true},
    commonRules: {
      required: true,
      message: "请选择分类id"
    }
  },
  {
    title: "标签",
    dataIndex: "tags",
    formType: "select",
    search: true,
    multiple: true,
    dict: {url: 'avenue/tag/index', params: { onlyMenu: true, type: 0 } , props: { label: 'title', value: 'id' }, translation: true},
    commonRules: {
      required: true,
      message: "请选择标签"
    }
  },
  {
    title: "状态",
    dataIndex: "status",
    formType: "radio",
    search: true,
    addDefaultValue: '0',
    dict: { name: 'product_status', props: { label: 'title', value: 'key' }, translation: true },
    commonRules: {
      required: true,
      message: "请设置产品状态"
    }
  },
  {
    title: "排序",
    dataIndex: "sort",
    formType: "input",
    commonRules: {
      required: false,
      message: "请输入排序"
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
  // {
  //   title: "创建时间",
  //   dataIndex: "created_at",
  //   formType: "date",
  //   addDisplay: false,
  //   editDisplay: false,
  //   width: 160,
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
    width: 200,
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