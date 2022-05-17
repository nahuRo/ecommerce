import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import PieDePagina from './components/PieDePagina/PieDePagina';
import AvisoLegal from "./components/Extras/AvisoLegal/AvisoLegal";
import PolíticaDePrivacidad from "./components/Extras/PoliticaDePrivacidad/PoliticaDePrivacidad";
import NotFound from "./components/Extras/NoFound/NotFound";

import { CartContextProvider } from './context/CartContext';

function App() {
    return(
        <>
            <CartContextProvider>
                <BrowserRouter> 
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />

                        <Route path="/list" element={<ItemListContainer/>}/>
                        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
                        <Route path="/marca/:productMarc" element={<ItemListContainer/>}/>
                        <Route path="/cart" element={<Cart/>}/>

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
