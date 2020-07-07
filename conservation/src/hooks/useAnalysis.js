import React, { useState } from 'react'
import analysis from '../api/analysis'

export default () => {

    const [pantingAnalysis, setPaintingAnalysis] = useState([])

    const searchAnalysisAPI = async accessionNumber => {
        const response = await analysisAPI.get('/paintings', {
            params: {
                id: accessionNumber
            }
        })
        setPaintingAnalysis(response.data)
    }

    return[searchAnalysisAPI, pantingAnalysis]
}