import React, { useState } from 'react'
import { Box, Flex, Text, Spacer, Icon } from '@chakra-ui/react'
import ShowActorsGrid from 'components/show/ShowActorsGrid'
import ShowActorsList from 'components/show/ShowActorsList'
import { MdGridOn } from 'react-icons/md'
import { MdList } from 'react-icons/md'
import Actor from 'models/Actor'

interface Props {
    casts: Actor[]
}
const ShowActors = ({ casts }: Props) => {
    const [isGrid, setIsGrid] = useState<boolean>(true)

    const handleClick = () => {
        setIsGrid((prevIsGrid) => !prevIsGrid)

    }

    return (
        <Box mx="auto" my="50px" w="60%">
            <Flex my='20px'>
                <Text fontSize='xl'>CAST:</Text>
                <Spacer />
                <Icon w='30px' h='30px' color='#245ed1' as={isGrid ? MdGridOn : MdList} onClick={handleClick} />

            </Flex>
            {isGrid ? <ShowActorsGrid casts={casts} key={'grid'} /> : <ShowActorsList casts={casts} key='list' />}

        </Box>
    )
}

export default ShowActors
