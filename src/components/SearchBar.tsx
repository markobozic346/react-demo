import React, { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';
interface Props {
    onSearch: (string) => void
}
const Search = ({ onSearch }: Props) => {
    const [inputText, setInputText] = useState<string>('');
    const handleChange = (e) => {
        setInputText(e.target.value);
        onSearch(e.target.value);
    };
    return (
        <Box w="300px" mx="auto" my="20px">
            <Input size="lg" placeholder="search movies by title" onChange={handleChange} value={inputText} />
        </Box>
    );
};

export default Search;
