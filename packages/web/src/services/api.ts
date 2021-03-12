import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.100.228:1313'
})

export default api
