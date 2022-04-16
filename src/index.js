import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import AvisoLegal from "./components/Extras/AvisoLegal/AvisoLegal";
import PolíticaDePrivacidad from "./components/Extras/PoliticaDePrivacidad/PoliticaDePrivacidad";
import NotFound from "./components/Extras/NoFound/NotFound";

// El index.js es en donde tengo conectada toda mi aplicacion con el DOM real
ReactDOM.render(
  <BrowserRouter> {/* lo dejo aca porque toda mi aplicaion va a trabajar con ReactRouter */}
    <Routes>
      <Route path="/" element={<App />}>

        {/* rutas hijos / rutas anidadas */}
        <Route index element={<h1>Landing</h1>}/> {/* index, lo primero que se muestra*/}

        <Route path="list" element={<ItemListContainer/>}/>
        <Route path="detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="marca/:productMarc" element={<ItemListContainer/>}/>
        
        <Route path="AvisoLegal" element={<AvisoLegal/>}/>
        <Route path="PoliticaDePrivacidad" element={<PolíticaDePrivacidad/>}/>

        <Route path='*' element={<NotFound/>}/>

      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
// el componente que 'imprime' es el app por ende tengo que llamar a todos mis componentes en App.s
