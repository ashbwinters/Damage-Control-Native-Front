import React, { useState } from 'react'

const PaintingContext = React.createContext()

export const PaintingProvider = ({ children }) => {

    const [selectedPainting, setSelectedPainting] = useState({
        "title": "Cypresses",
        "description": "Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise)",
        "artist": "Vincent van Gogh",
        "culture": "",
        "teaserText": "<p>Vincent van Gogh (Dutch, Zundert 1853–1890 Auvers-sur-Oise) </p><p>Date: 1889<br/>Accession Number: 49.30</p>",
        "url": "/art/collection/search/437980?&searchField=ArtistCulture&sortBy=Relevance&ao=on&ft=Vincent+Van+Gogh&offset=0&rpp=80&amp;pos=20",
        "image": "https://images.metmuseum.org/CRDImages/ep/mobile-large/DP130999.jpg",
        "regularImage": "ep/web-additional/DP130999.jpg",
        "largeImage": "ep/web-large/DP130999.jpg",
        "date": "1889",
        "medium": "Oil on canvas",
        "accessionNumber": "49.30",
        "galleryInformation": "Not on view"
        })
    const changeSelectedPainting = (newPainting) => {
        setSelectedPainting(newPainting)
    }

    return (
        <PaintingContext.Provider value={{data: selectedPainting, changeSelectedPainting}}>
            {children}
        </PaintingContext.Provider>
    )
}
export default PaintingContext