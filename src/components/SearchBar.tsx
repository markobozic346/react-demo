import React, { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';

const Search = ({ setSearch }) => {
    const [inputText, setInputText] = useState<string>('');
    const handleChange = (value) => {
        setInputText(value);
        setSearch(value);
    };
    return (
        <Box w="300px" mx="auto" my="20px">
            <Input size="lg" placeholder="search movies by title" onChange={(e) => handleChange(e.target.value)} value={inputText} />
        </Box>
    );
};

export default Search;
