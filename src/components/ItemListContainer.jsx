import React from "react";
import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";

const ItemListContainer = () => {
    const menu = [
        {id:1, alimento: "hamburguesa", precio: 100, foto: "./img/hamburguesas.jpeg", descripcion: "hamburgues"},
        {id:2, alimento: "empanada", precio: 50, foto: "./img/empanadas.jpeg", descripcion: "empanada"},
        {id:3, alimento: "pizza", precio: 120, foto: "./img/pizza.jpeg", descripcion: "pizza"}
    ]

    const mostrar = new Promise((resolve, reject) => {
        if (menu.length > 0) {
            setTimeout(() => {
                resolve(menu);
            }, 1000)
        } else reject("No esta dsiponible el menu");
    })

    mostrar.then((total) => {
        console.log(total);
    })
    .catch((err) => {
        console.error(err);
    })

    return (
    <>
        <ItemList menu={menu}/>
    </>
)
}






export default ItemListContainer;