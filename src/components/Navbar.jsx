import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton ,MenuList ,MenuItem } from '@chakra-ui/react';
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <header >
        
        <Menu>
        {({ }) => (
            <>
            <Link to="./">Justettini</Link>
            <MenuButton bg="#d4cfa5" className='btn-header'>
                Negocios
            </MenuButton>
            <MenuList>
                <MenuItem>Negocios 1</MenuItem>
                <MenuItem>Negocios 2</MenuItem>
                <MenuItem>Negocios 3</MenuItem>
            </MenuList>
            </>
        )}
        </Menu>
        <CartWidget menu></CartWidget>
    </header>
  );
}

export default Navbar;