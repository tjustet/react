import React from "react";
import Navbar from "./components/navbar/"
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import './css/style.css';
import { BrowserRouter } from "react-router-dom";


const App = () => {
    return(
      <BrowserRouter>
        <div className="body">
          <Navbar />
          <div>
              <h1 className="h1 titulo">Productos</h1>
              <div>
                <ItemListContainer></ItemListContainer>
              </div>
          </div>
        </div>
      </BrowserRouter>

    )
}



export default App
