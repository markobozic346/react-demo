import React, { useState, useEffect } from 'react'
import { showsService } from 'services/showService';
import ShowList from 'app/showPage/ShowList'
interface Props {

}

const Main = (props: Props) => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState<true | false>(true);

    useEffect(() => {
        setLoading(true);
        fetchShows();
    }, []);

    const fetchShows = async function () {
        const fetchedShows = await showsService.fetchData();
        setShows(fetchedShows);
        setLoading(false);
    }
    return (
        <>
            <ShowList shows={shows} loading={loading} />
        </>
    )
}

export default Main
