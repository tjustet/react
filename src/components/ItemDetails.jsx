import React from "react";
import {Card, CardBody, Stack, Heading, Text, Divider, Button, } from '@chakra-ui/react'


const ItemDetails = ({menu}) => {
    const { id } = useParams()
    
    const filtro = menu.filter((menu)=>menu.id === id)
    return (
        <>
        {
            filtro.map((menu)=>{
                return (
                    <div className="body">
                    <Card maxW={"sm"}>
                        <CardBody className="colorrecuadro">
                            <Stack mt='6' spacing= '3'>
                                <img src={imagen} alt={alimento} />
                                <Heading size='md'>{alimento}</Heading>
                                <Text className="h2">
                                    Precio: {precio}
                                </Text>
                                <Text className="h2">
                                    Description: {description}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider></Divider>
                        <Button>
                            <Link to={`./menu/${id}`}>
                                Comprar
                            </Link>
                        </Button>
                    </Card>
                </div>
                )
            })
        }
        </>
    )
}









export default ItemDetails