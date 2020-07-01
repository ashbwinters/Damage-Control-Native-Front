const { default: Axios } = require("axios")
import axios from 'axios'

export default axios.create({
    baseURL: `https://www.metmuseum.org/api/collection`
})