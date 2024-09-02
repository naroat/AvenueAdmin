import { request } from '@/utils/request.js'

/**
 * 配置管理 API JS
 */

export default {

  /**
   * 获取配置管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'avenue/config/index',
      method: 'get',
      params
    })
  },

  /**
   * 更新配置管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'avenue/config/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取配置管理
   * @returns
   */
  read (id) {
    return request({
      url: 'avenue/config/read/' + id,
      method: 'get'
    })
  },


}