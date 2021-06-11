import React from 'react';
import { Box, Text, Flex, Circle } from '@chakra-ui/react';
interface Props {
	title: string;
	genres: string[];
	desc: string;
}

const ShowDescription = ({ title, genres, desc }: Props) => {
	return (
		<Box>
			<Text fontSize="3xl" mb="20px">
				{title}
			</Text>
			<Flex>
				{genres.map((genre) => (
					<Circle mr="2px" p="5px" bg="gray" color="white" fontSize="sm">
						{genre}
					</Circle>
				))}
			</Flex>
			<Text mt="20px" w="350px" dangerouslySetInnerHTML={{ __html: desc }} />
		</Box>
	);
};

export default ShowDescription;
