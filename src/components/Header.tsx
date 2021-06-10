import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';
const Header = () => {
  return (
    <Box bg="#245ed1" w="100%" h="50px" p="3" color="white">
      <Flex>
        <Box>Demo Project</Box>
        <Spacer />
        <Box>
          <Link mx='10px' as={RouterLink} to="/">Home</Link>

          <Link mx='10px' as={RouterLink} to="/about">About</Link>
        </Box>

      </Flex>
    </Box>
  );
};

export default Header;
