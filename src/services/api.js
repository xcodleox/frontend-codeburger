import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3002'

})

export default apiCodeBurger
