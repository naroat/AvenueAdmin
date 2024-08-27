import { request } from '@/utils/request.js'

/**
 * 配置表 API JS
 */

export default {

  /**
   * 获取配置表分页列表
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
   * 读取配置表
   * @returns
   */
  read (id) {
    return request({
      url: 'avenue/config/read/' + id,
      method: 'get'
    })
  },

  /**
   * 更新配置表数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'avenue/config/update/' + id,
      method: 'put',
      data
    })
  },
}