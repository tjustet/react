import React from "react";
import {Card, CardBody, Stack, Heading, Text, Divider, Button, Link} from '@chakra-ui/react'


const Item = ({id, alimento, precio, imagen, description}) => {
    return (
        <div className={"body"}>
            <Card maxW={"sm"}>
                <CardBody className={"colorrecuadro"}>
                    <Stack mt={'6'} spacing= {'3'}>
                        <img src={{imagen}} alt={{alimento}} />
                        <Heading size={'md'}>{{alimento}}</Heading>
                        <Text className={"h2"}>Precio: {{precio}}</Text>
                        <Text className={"h2"}>Description: {{description}}</Text>
                    </Stack>
                </CardBody>
                <Divider></Divider>
                <Button>
                    <Link to={`./menu/${{id}}`}>
                        Comprar
                    </Link>
                </Button>
            </Card>
        </div>





    )
}

export default Item
/*             <ul>
            {menu.map((producto) => (
              <li>
                <img src={producto.foto} alt="" />
              </li>
            ))}
            </ul>
            <ul className="">
                {menu.map((producto) => (
                  <li className="h3">
                      {producto.alimento}= ${producto.precio}
                  </li>
                ))}
            </ul> */









