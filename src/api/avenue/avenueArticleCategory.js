import { request } from '@/utils/request.js'

/**
 * 文章分类 API JS
 */

export default {

  /**
   * 获取文章分类分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'avenue/articleCategory/index',
      method: 'get',
      params
    })
  },

  /**
   * 将文章分类删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'avenue/articleCategory/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 读取文章分类
   * @returns
   */
  read (id) {
    return request({
      url: 'avenue/articleCategory/read/' + id,
      method: 'get'
    })
  },

  /**
   * 更新文章分类数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'avenue/articleCategory/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 添加文章分类
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'avenue/articleCategory/save',
      method: 'post',
      data
    })
  },


}