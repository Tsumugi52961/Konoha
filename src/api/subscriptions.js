import axios from '@/libs/axios'

export const getSubscriptions = () => {
  axios.request({
    url: '/api/subscriptions',
    method: 'get'
  })
}
