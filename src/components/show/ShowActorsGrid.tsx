import React from 'react'
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import Actor from 'models/Actor'
interface Props {
    casts: Actor[]
}
const ShowActorsGrid = ({ casts }: Props) => {
    return (
        <SimpleGrid columns={[2, 4, 6]} gap="1" >
            {casts.map((actor, index) => <Box position='relative' key={`${actor.id}${index}`}>
                <Text position='absolute' color='white' bottom='0'>{actor.name}</Text>
                <Image w='120px' h='120px' src={actor.image} />
            </Box>)}
        </SimpleGrid >

    )
}

export default ShowActorsGrid
