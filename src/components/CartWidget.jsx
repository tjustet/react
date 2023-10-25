/* carrito de compra */
import { Badge, Box, Flex } from '@chakra-ui/react';
import React from 'react';

function CartWidget() {
    return (
        <Flex>
            <Box>
                <img src="../../public/CarritoDeCompras.png" alt="" style={{height: '70px',}} />
            </Box>
            <Box>
                <Badge colorScheme='green'>3</Badge>
            </Box>
        </Flex>

        
    )
}







export default CartWidget;