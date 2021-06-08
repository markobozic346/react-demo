import React, { useEffect, useState } from "react";
import { showsService } from 'services/showService'
const ShowList = () => {

  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState<true | false>(true)

  useEffect(() => {
    setLoading(true)
    fetchShows()
  }, [])

  const fetchShows = async function () {
    const fetchedShows = await showsService.fetchData();
    setShows(fetchedShows)
    setLoading(false)

  }

  return <div>{loading ? 'loading...' : 'ready'}</div>;
};

export default ShowList;
