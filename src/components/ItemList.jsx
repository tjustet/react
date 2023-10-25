import React from "react";
import Item from "./Item"


const ItemList = (menu) => {
    return(
          for (const producto in menu) {
            return (
              <Item
                id = {producto.id}
                alimento = {producto.alimento}
                precio = {producto.precio}
                imagen = {producto.imagen}
                description = {producto.description}
              />
            )
        }
    )
  }

export default  ItemList