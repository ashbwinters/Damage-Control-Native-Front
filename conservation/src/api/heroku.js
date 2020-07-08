const { default: Axios } = require('axios')
import axios from 'axios'

export default axios.create({
    baseURL: `https://damage-control-painting.herokuapp.com/`
})