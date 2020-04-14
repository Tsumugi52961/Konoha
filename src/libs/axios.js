import axios from 'axios'
import { stringify } from 'qs'

const baseUrl = process.env.REACT_APP_REMOTE_HOST

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  setInterceptors (instance) {
    instance.interceptors.request.use(config => {
      config.headers.Accept = 'application/json'
      // nested params 格式整理
      config.paramsSerializer = params => {
        return stringify(params, {
          arrayFormat: 'brackets',
          encode: true
        })
      }
      return config
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign({
      baseURL: this.baseUrl
    }, options)
    this.setInterceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)
