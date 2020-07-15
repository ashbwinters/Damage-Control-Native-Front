import { useState } from 'react'
import metMuseum from '../api/metMuseum'

export default () => {

    const [paintings, setPaintings] = useState([])

    const searchMetAPI = async artist => {
        const response = await metMuseum.get(`/collectionlisting`, {
            params: {
                showOnly: 'withImage openAccess',
                q: artist,
                perPage: 80,
                searchField: 'ArtistCulture'
            }
        })
        setPaintings(response.data.results)
    }

    return [searchMetAPI, paintings]
}