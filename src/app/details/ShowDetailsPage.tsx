import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { showsService } from 'services/showService';
import LoadingAnimation from 'components/animations/LoadingAnimation';
import { Box, Image, Spacer, Text, Flex, Circle } from '@chakra-ui/react';
import Show from 'models/Show';
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
                <Flex mx="auto" my="50px" w="80%">
                    <Spacer />
                    <Box>
                        <Image w="340px" h="460px" src={details.image} />
                    </Box>
                    <Spacer />
                    <Box>
                        <Text fontSize="3xl" mb="20px">
                            {details.title}
                        </Text>
                        <Flex>
                            {details.genres.map((genre) => (
                                <Circle mr='2px' p="5px" bg="gray" color="white" fontSize="sm">
                                    {genre}
                                </Circle>
                            ))}
                        </Flex>
                        <Text mt='20px' w="350px" dangerouslySetInnerHTML={{ __html: details.desc }} />
                    </Box>
                    <Spacer />
                </Flex>
            ) : (
                <LoadingAnimation />
            )
            }
        </div >
    );
};

export default ShowDetailsPage;
