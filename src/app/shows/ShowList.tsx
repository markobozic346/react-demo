import React, { useState, useEffect } from 'react';
import { showsService } from 'services/showService';
import Show from 'models/Show';
import ShowCard from 'app/shows/ShowCard'
import LoadingAnimation from 'components/animations/LoadingAnimation';
import { SimpleGrid, Center } from '@chakra-ui/react';
const ShowList = ({ search }) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // fetch shows
  useEffect(() => {
    setLoading(true);
    fetchShows();
  }, []);

  const fetchShows = async function () {
    const fetchedShows = await showsService.fetchData();
    setShows(fetchedShows);
    setLoading(false);
  };

  //filter Shows
  const filteredShows = search !== '' ? shows.filter(show => show.title.toLowerCase().includes(search)) : shows



  return (
    <Center>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <SimpleGrid columns={[2, 3, 4]} gap="5">
          {filteredShows.map((show) => <ShowCard key={show.id} {...show} />)}
        </SimpleGrid>
      )}
    </Center>
  );
};

export default ShowList;