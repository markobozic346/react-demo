import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Show from 'models/Show';
import { showsService } from 'services/showService';
import LoadingAnimation from 'components/animations/LoadingAnimation';
import { Box, Image, Spacer, Flex, Divider } from '@chakra-ui/react';
import ShowDescription from 'components/show/ShowDescription';
import ShowActors from 'components/show/ShowActors';

const ShowDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [details, setDetails] = useState<Show>();

    useEffect(() => {
        fetchSingleShow();
    }, []);

    const fetchSingleShow = async () => {
        const fetchedShow = await showsService.fetchSingleShow(id);
        setDetails(fetchedShow);
    };
    return (
        <div>
            {details ? (
                <Box>
                    <Flex mx="auto" my="50px" w="80%">
                        <Spacer />
                        <Box>
                            <Image w="340px" h="460px" src={details.image} />
                        </Box>
                        <Spacer />
                        <ShowDescription title={details.title} genres={details.genres} desc={details.desc} />
                        <Spacer />
                    </Flex>
                    <Divider mx="auto" w="60%" />
                    <ShowActors casts={details.casts} />
                </Box>
            ) : (
                <LoadingAnimation />
            )}
        </div>
    );
};

export default ShowDetailsPage;
