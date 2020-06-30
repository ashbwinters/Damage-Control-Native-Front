import { useState } from 'react'
import metMuseum from '../api/metMuseum'

export default () => {

    const [paintings, setPaintings] = useState([])

    const getLimitedPaintings = async results => {
            const response = await metMuseum.get(`/objects/${results[1]}`)
            setPaintings(...paintings, response.data)
    } 

    return[getLimitedPaintings, paintings]
}