import axios from 'axios'

export default axios.create({
  baseURL: 'http://atelie72.ru:8000/',
  responseType: 'json'
})
