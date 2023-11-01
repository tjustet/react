import React, {useState, filterState, TaskList} from "react";
import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";

const ItemListContainer = () => {
    const Productos = [
        {id:1, alimento: "hamburguesa", precio: 100, imagen: "./img/hamburguesas.jpeg", descripcion: "hamburgues"},
        {id:2, alimento: "empanada", precio: 50, imagen: "./img/empanadas.jpeg", descripcion: "empanada"},
        {id:3, alimento: "pizza", precio: 120, imagen: "./img/pizza.jpeg", descripcion: "pizza"}
    ];

    const mostrar = new Promise((resolve, reject) => {
        if (Productos.length > 0) {
            setTimeout(() => {
                resolve(Productos);
            }, 1000)
        } else reject("No esta dsiponible el Productos");
    })

    mostrar.then((total) => {
        console.log(total);
    })
    .catch((err) => {
        console.error(err);
    })

    return (
    <>
    <Center>
        <ItemList Productos={JSON.parse(Productos)}/>
    </Center>
    </>
)
}

export default ItemListContainer;