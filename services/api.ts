import axios from 'axios'
import type { AxiosError, AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
})

instance.interceptors.response.use(
  (res) => res.data,
  (err: AxiosError) => {
    if (err.response) {
      return Promise.reject(err.response.data)
    }

    if (err.request) {
      return Promise.reject(err.request)
    }

    return Promise.reject(err.message)
  }
)

const api = <T>(cfg: AxiosRequestConfig) => instance.request<unknown, T>(cfg)

export default api
