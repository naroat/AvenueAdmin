import { request } from '@/utils/request.js'

/**
 * 文章管理 API JS
 */

export default {

  /**
   * 获取文章管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'avenue/article/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加文章管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'avenue/article/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新文章管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'avenue/article/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取文章管理
   * @returns
   */
  read (id) {
    return request({
      url: 'avenue/article/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将文章管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'avenue/article/delete',
      method: 'delete',
      data
    })
  },


}