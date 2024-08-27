import { request } from '@/utils/request.js'

/**
 * 搜索分类 API JS
 */

export default {

  /**
   * 获取搜索分类分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'avenue/searchCategory/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加搜索分类
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'avenue/searchCategory/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新搜索分类数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'avenue/searchCategory/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取搜索分类
   * @returns
   */
  read (id) {
    return request({
      url: 'avenue/searchCategory/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将搜索分类删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'avenue/searchCategory/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取搜索分类数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'avenue/searchCategory/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复搜索分类数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'avenue/searchCategory/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除搜索分类
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'avenue/searchCategory/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改搜索分类数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'avenue/searchCategory/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改搜索分类数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'avenue/searchCategory/numberOperation',
      method: 'put',
      data
    })
  },

  /**
    * 搜索分类导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'avenue/searchCategory/import',
      method: 'post',
      data
    })
  },

  /**
   * 搜索分类下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'avenue/searchCategory/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 搜索分类导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'avenue/searchCategory/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}