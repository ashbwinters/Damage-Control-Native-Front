const { default: Axios } = require("axios")
import axios from 'axios'

export default axios.create({
    baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1'
})