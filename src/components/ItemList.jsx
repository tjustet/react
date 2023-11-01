import React from "react";
import Item from "./Item";


const ItemList = (Productos) => {
  console.log (typeof Productos)
/*   Productos = JSON.parse(Productos); */

  return (
    <>

        {

        Productos.map((p) => {
          console.log(p)
          return (
            <Item
              id = {p.id}
              alimento = {p.alimento}
              precio = {p.precio}
              imagen = {p.imagen}
              descripcion = {p.descripcion}
            />
          )
        })
        }
    </> 
          )
    
  }

export default ItemList


/*   
    {for (let i = 0; i < Productos.length; i++){
        return (
      <Item
        id = {Productos[i].id}
        alimento = {Productos[i].alimento}
        precio = {Productos[i].precio}
        imagen = {Productos[i].imagen}
        descripcion = {Productos[i].descripcion}
      />
      
      
    )
  } 
  }
 */