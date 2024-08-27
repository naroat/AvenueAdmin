import { request } from '@/utils/request.js'

/**
 * 搜索管理 API JS
 */

export default {

  /**
   * 获取搜索管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'avenue/search/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加搜索管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'avenue/search/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新搜索管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'avenue/search/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取搜索管理
   * @returns
   */
  read (id) {
    return request({
      url: 'avenue/search/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将搜索管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'avenue/search/delete',
      method: 'delete',
      data
    })
  },


}