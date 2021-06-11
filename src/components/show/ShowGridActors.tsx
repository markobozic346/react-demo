import React from 'react'
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import Actor from 'models/Actor'
const ShowListActors = ({ casts }) => {
    console.log(casts)
    return (
        <SimpleGrid columns={[2, 4, 6]} gap="1" >
            {casts.map((actor, index) => <Box position='relative' key={`${actor.id}${index}`}>
                <Text position='absolute' color='white' bottom='0'>{actor.name}</Text>
                <Image w='120px' h='120px' src={actor.image.medium} />
            </Box>)}
        </SimpleGrid >

    )
}

export default ShowListActors
