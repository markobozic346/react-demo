import React, { useState, useEffect } from 'react';
import { showsService } from 'services/showService';
import Show from 'models/Show';
import ShowCard from 'app/showPage/ShowCard';
import LoadingAnimation from 'components/animations/LoadingAnimation';
import { Grid, Center } from '@chakra-ui/react';
const ShowList = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetchShows();
  }, []);

  const fetchShows = async function () {
    const fetchedShows = await showsService.fetchData();
    setShows(fetchedShows);
    setLoading(false);
  };

  return (
    <Center>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <Grid templateColumns="repeat(4, 1fr)" gap="10">
          {shows.map((show) => <ShowCard key={show.id} />)}
        </Grid>
      )}
    </Center>
  );
};

export default ShowList;
