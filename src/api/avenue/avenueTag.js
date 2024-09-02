import { request } from '@/utils/request.js'

/**
 * 产品标签 API JS
 */

export default {

  /**
   * 获取产品标签分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'avenue/tag/index',
      method: 'get',
      params
    })
  },

  /**
   * 将产品标签删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'avenue/tag/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 读取产品标签
   * @returns
   */
  read (id) {
    return request({
      url: 'avenue/tag/read/' + id,
      method: 'get'
    })
  },

  /**
   * 更新产品标签数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'avenue/tag/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 添加产品标签
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'avenue/tag/save',
      method: 'post',
      data
    })
  },


}