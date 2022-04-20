import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";


import NavBar from './components/NavBar/NavBar';
import PieDePagina from './components/PieDePagina/PieDePagina';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import AvisoLegal from "./components/Extras/AvisoLegal/AvisoLegal";
import PolíticaDePrivacidad from "./components/Extras/PoliticaDePrivacidad/PoliticaDePrivacidad";
import NotFound from "./components/Extras/NoFound/NotFound";

import { CartContextProvider } from './context/CartContext';

export const context = createContext() // creo la burbuja, va afuera de la funcion ( App() )


function App() {
    return(
        <>
            <CartContextProvider>
                <BrowserRouter> {/* lo dejo aca porque toda mi aplicaion va a trabajar con ReactRouter */}
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<h1>Landing</h1>}/>

                        <Route path="/list" element={<ItemListContainer/>}/>
                        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
                        <Route path="/marca/:productMarc" element={<ItemListContainer/>}/>
                        
                        <Route path="/AvisoLegal" element={<AvisoLegal/>}/>
                        <Route path="/PoliticaDePrivacidad" element={<PolíticaDePrivacidad/>}/>

                        <Route path='*' element={<NotFound/>}/>

                    </Routes>
                    <PieDePagina/>
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

export default App;
