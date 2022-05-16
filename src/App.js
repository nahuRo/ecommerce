import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { createContext } from "react";
// NO SE PORQUE TENGO ESTO          

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import PieDePagina from './components/PieDePagina/PieDePagina';
import AvisoLegal from "./components/Extras/AvisoLegal/AvisoLegal";
import PolíticaDePrivacidad from "./components/Extras/PoliticaDePrivacidad/PoliticaDePrivacidad";
import NotFound from "./components/Extras/NoFound/NotFound";
import Home from './components/Home/Home';
import Formulario from "./components/Formulario/Formulario"

import { CartContextProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

// export const context = createContext() // creo la burbuja, va afuera de la funcion ( App() )
// NO SE PORQUE TENGO ESTO          


function App() {
    return(
        <>
            <UserProvider>
                <CartContextProvider>
                    <BrowserRouter> 
                        <NavBar/>
                        <Routes>
                            {/* <Route path="/" element={<Home/>}/> */}
                            <Route path='/' element={<ItemListContainer />} />

                            <Route path="/list" element={<ItemListContainer/>}/>
                            <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
                            <Route path="/marca/:productMarc" element={<ItemListContainer/>}/>
                            <Route path="/cart" element={<Cart/>}/>

                            <Route path="/loginUi" element={<Formulario/>}/>
                            <Route path="/AvisoLegal" element={<AvisoLegal/>}/>
                            <Route path="/PoliticaDePrivacidad" element={<PolíticaDePrivacidad/>}/>

                            <Route path='*' element={<NotFound/>}/>

                        </Routes>
                        <PieDePagina/>
                    </BrowserRouter>
                </CartContextProvider>
            </UserProvider>
        </>
    )
}

export default App;
