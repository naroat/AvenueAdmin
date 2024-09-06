import { request } from '@/utils/request.js'

/**
 * 产品管理 API JS
 */

export default {

  /**
   * 获取产品管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'avenue/product/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加产品管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'avenue/product/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新产品管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'avenue/product/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取产品管理
   * @returns
   */
  read (id) {
    return request({
      url: 'avenue/product/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将产品管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'avenue/product/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 获取产品logo等信息
   * @returns
   */
  fetchProduct (data) {
    return request({
      url: 'avenue/product/fetchProduct',
      method: 'post',
      data
    })
  },

}