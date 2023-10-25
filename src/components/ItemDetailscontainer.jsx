import React from "react";

const ItemDerailContainer = () => {
        const ItemListContainer = () => {
            const menu = [
                {alimento: "hamburguesa", precio: 100, foto: "./img/hamburguesas.jpeg", descripcion: "hamburgues"},
                {alimento: "empanada", precio: 50, foto: "./img/empanadas.jpeg", descripcion: "empanada"},
                {alimento: "pizza", precio: 120, foto: "./img/pizza.jpeg", descripcion: "pizza"},
            ]
        
            const mostrar = new Promise((resolve, reject) => {
                if (menu.length > 0) {
                    setTimeout(() => {
                        resolve(menu);
                    }, 3000)
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
                <ItemDetails menu={menu}/>
            </>
        )
    }
}






