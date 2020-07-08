import React, { useState } from 'react'
import heroku from '../api/heroku'

export default () => {

    const [pantingData, setPaintingData] = useState([])

    const searchHeroku = async accessionNumber => {
        const response = await heroku.get('paintings', {
            params: {
                id: accessionNumber
            }
        })
        setPaintingData(response.data)
    }

    return[searchHeroku, pantingData]
}