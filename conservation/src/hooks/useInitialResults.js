import { useState } from 'react'
import metMuseum from '../api/metMuseum'


export default () => {
    const [results, setResults] = useState([])

    const searchMetAPI = async artist => {
            const response = await metMuseum.get('/search', {
                params: {
                    hasImages: true,
                    artistOrCultureRequest: true,
                    q: artist
                }
            })
            setResults(response.data.objectIDs)
    }

    return [searchMetAPI, results]
}