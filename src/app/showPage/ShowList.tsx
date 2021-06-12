import React, { useState, useEffect } from 'react';
import { showsService } from 'services/showService';
import Show from 'models/Show';
import ShowCard from 'app/showPage/ShowCard'
import LoadingAnimation from 'components/animations/LoadingAnimation';
import { SimpleGrid, Center } from '@chakra-ui/react';
import NoResults from 'components/NoResults';
interface Props {
  searchText: string
}
const ShowList = ({ searchText }: Props) => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // fetch shows
  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async function () {
    setLoading(true);
    try {
      const fetchedShows = await showsService.fetchShows();
      setShows(fetchedShows);
    }
    catch (err) {
      console.log(err)
    }
    finally {
      setLoading(false);
    }

  };

  //filter Shows
  const filteredShows = searchText !== '' ? shows.filter(show => show.title.toLowerCase().includes(searchText.toLowerCase())) : shows



  return (
    <Center>
      {loading ? (
        <LoadingAnimation />
      ) : (
        (filteredShows.length > 0) ?
          <SimpleGrid columns={[1, 2, 4]} gap="5">

            {filteredShows.map((show) => <ShowCard key={show.id} show={show} />)}
          </SimpleGrid> : <NoResults />
      )}
    </Center>
  );
};

export default ShowList;
