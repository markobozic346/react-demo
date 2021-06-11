import React, { useState } from 'react'
import { Box, Flex, Text, Spacer, Icon } from '@chakra-ui/react'
import ShowGridActors from 'components/show/ShowGridActors'
import ShowListActors from 'components/show/ShowListActors'
import { MdGridOn } from 'react-icons/md'
import { MdList } from 'react-icons/md'
const ShowActors = ({ casts }) => {
    const [isGrid, setIsGrid] = useState<boolean>(true)

    const handleClick = () => {
        setIsGrid((prevIsGrid) => !prevIsGrid)
        console.log(isGrid)

    }

    return (
        <Box mx="auto" my="50px" w="60%">
            <Flex my='20px'>
                <Text fontSize='xl'>CAST:</Text>
                <Spacer />
                <Icon w='30px' h='30px' color='#245ed1' as={isGrid ? MdGridOn : MdList} onClick={handleClick} />

            </Flex>
            {isGrid ? <ShowGridActors casts={casts} /> : <ShowListActors casts={casts} />}

        </Box>
    )
}

export default ShowActors
