import axios from '@/libs/axios'

export const getSubscriptions = () => {
  return axios.request({
    url: '/api/subscriptions',
    method: 'get'
  })
}
