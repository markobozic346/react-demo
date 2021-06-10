import React from 'react'
import { useParams } from 'react-router'


const ShowDetailsPage = () => {
    const { id } = useParams<{ id: string }>()

    return (
        <div>
            Show id: {id}
        </div>
    )
}

export default ShowDetailsPage
