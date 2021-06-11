import React from 'react'
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'

const ShowListActors = ({ casts }) => {
    return (
        <SimpleGrid columns={[2, 4, 6]} gap="1">
            {casts.map((actor) => <Box position='relative'>
                <Text position='absolute' color='white' bottom='0'>{actor.name}</Text>
                <Image w='120px' h='120px' src={actor.image.medium} />
            </Box>)}
        </SimpleGrid >

    )
}

export default ShowListActors
