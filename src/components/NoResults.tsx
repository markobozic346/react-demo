import React from 'react'
import { Center, Text } from '@chakra-ui/react'
interface Props {

}

const NoResults = (props: Props) => {
    return (
        <Center>
            <Text w='300px'>
                We couldn't find any show matching your search.
            </Text>
        </Center >
    )
}

export default NoResults
