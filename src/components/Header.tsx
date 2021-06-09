import React from "react";
import { Box, Menu, MenuList, MenuItem } from "@chakra-ui/react"
const Header = () => {
  return <Box bg='#245ed1' w='100%' h='50px' p='3' color="white">
    Demo Project
    <Menu>
      <MenuList>
        <MenuItem>
          Home
          </MenuItem>
        <MenuItem>
          About
          </MenuItem>
      </MenuList>
    </Menu>
  </Box >
};

export default Header;
