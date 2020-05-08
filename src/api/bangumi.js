import axios from '@/libs/axios'

export const getBangumis = () => {
  return axios.request({
    url: '/api/bangumis',
    method: 'get'
  })
}

export const getBangumi = (id) => {
  return axios.request({
    url: `/api/bangumis/${id}`,
    method: 'get'
  })
}
