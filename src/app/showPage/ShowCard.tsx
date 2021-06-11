import React from 'react';
import { Box, Image, Text, Circle, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Show from 'models/Show';
// show
const ShowCard = (props: Show) => {
    const { id, title, image, rating } = props;

    return (
        <Link as={RouterLink} to={`/show/${id}`}>
            <Box
                w="280px"
                h="460px"
                borderRadius="lg"
                borderWidth="1px"
                _hover={{
                    boxShadow: 'rgba(0, 0, 0, 0.29) 0px 4px 9px'
                }}
            >
                <Image w="280px" h="380px" src={image} />

                <Box position="relative" zIndex={999}>
                    <Circle mt="-20px" size="40px" bg="#245ed1" position="relative" left="80%">
                        <Text color="white" fontWeight="400">
                            {rating}
                        </Text>
                    </Circle>
                    <Text fontSize="30" p="10px">
                        {title.length > 15 ? `${title.slice(0, 15)}...` : title}
                    </Text>
                </Box>
            </Box>
		</Link>
	);
};

export default ShowCard;