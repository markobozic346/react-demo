import React, { useState, useEffect } from 'react';
import { showsService } from 'services/showService';
import ShowCard from 'app/showPage/ShowCard';
import LoadingAnimation from 'components/animations/LoadingAnimation';
const ShowList = () => {
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
  };

  return <div>{loading ? <LoadingAnimation /> : shows.map((show) => <ShowCard />)}</div>;
};

export default ShowList;
