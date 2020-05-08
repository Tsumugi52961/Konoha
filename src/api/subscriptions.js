import axios from '@/libs/axios'

export const getSubscriptions = () => {
  return axios.request({
    url: '/api/subscriptions',
    method: 'get'
  })
}

export const getSubscription = (id) => {
  return axios.request({
    url: `/api/subscriptions/${id}`,
    method: 'get'
  })
}

export const createSubscription = ({ name, rule, status }) => {
  return axios.request({
    url: '/api/subscriptions',
    method: 'post',
    data: { name, rule, status }
  })
}

export const updateSubscription = ({ id, name, rule, status }) => {
  return axios.request({
    url: `/api/subscriptions/${id}`,
    method: 'patch',
    data: { name, rule, status }
  })
}

export const removeSubscription = (id) => {
  return axios.request({
    url: `/api/subscriptions/${id}`,
    method: 'delete'
  })
}
