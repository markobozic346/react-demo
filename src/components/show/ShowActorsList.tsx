import React from 'react'
import { List, ListItem, Text, Image, Flex, Divider, Box } from "@chakra-ui/react"
import Actor from 'models/Actor'
interface Props {
    casts: Actor[]
}
const ShowActorsList = ({ casts }: Props) => {

    return (
        <List>
            {casts.map((actor) =>
                <Box key={actor.id}>
                    <Divider />
                    <ListItem mt='2px'>
                        <Flex>
                            <Image borderRadius="50%" w='50px' h='50px' src={actor.image}></Image>
                            <Text p='10px'>{actor.name}</Text>
                        </Flex>
                    </ListItem>
                </Box>

            )}
        </List>
    )
}

export default ShowActorsList
