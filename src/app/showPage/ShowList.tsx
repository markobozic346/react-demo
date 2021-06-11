import React, { useState, useEffect } from 'react';
import { showsService } from 'services/showService';
import Show from 'models/Show';
import ShowCard from 'app/showPage/ShowCard'
import LoadingAnimation from 'components/animations/LoadingAnimation';
import { SimpleGrid, Center } from '@chakra-ui/react';
import NoResults from 'components/NoResults';
const ShowList = ({ search }) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // fetch shows
  useEffect(() => {
    setLoading(true);
    fetchShows();
  }, []);

  const fetchShows = async function () {
    const fetchedShows = await showsService.fetchShows();
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
        (filteredShows.length > 0) ?
          <SimpleGrid columns={[2, 3, 4]} gap="5">

            {filteredShows.map((show) => <ShowCard key={show.id} {...show} />)}
          </SimpleGrid> : <NoResults />
      )}
    </Center>
  );
};

export default ShowList;
