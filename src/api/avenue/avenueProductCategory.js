import { request } from '@/utils/request.js'

/**
 * 产品分类 API JS
 */

export default {

  /**
   * 获取产品分类分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'avenue/productCategory/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加产品分类
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'avenue/productCategory/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新产品分类数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'avenue/productCategory/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取产品分类
   * @returns
   */
  read (id) {
    return request({
      url: 'avenue/productCategory/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将产品分类删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'avenue/productCategory/delete',
      method: 'delete',
      data
    })
  },


}