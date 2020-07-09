const { default: Axios } = require('axios')
import axios from 'axios'

export default axios.create({
    baseURL: `https://agile-atoll-66588.herokuapp.com/`
})