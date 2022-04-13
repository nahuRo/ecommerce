import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
function App() {

    // const cantidadProd = (cant) => {
    //     console.log(`${cant} cantidad de productos agregados al carrito`)
    // }

    return (
        <div className="App">
            <header>
                <BrowserRouter>{/*Aqui va todo lo que esta relacionado con barra de navegacion*/}
                    <NavBar/>
                    <Routes> {/*Listado de destinos*/}
                        <Route path='/' element={<ItemListContainer greeting = 'Saludo desde itemListContainer'/>}/> {/*Route son los destinos a los que van los <Link>*/}
                        <Route path='/list' element={<ItemListContainer/>}/> 
                        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/> {/* ':' ruta dinamica */}
                        <Route path='/marca/:productMarc' element={<ItemListContainer/>}/> {/* ':' ruta dinamica */}
                        <Route path='*' element={<h1>404 not found</h1>}/> {/* '*' si no coincide con nigun path entonces viene aca*/}
                    </Routes>
                </BrowserRouter>
            </header>
            <main>
                {/* <ItemCount initial={0} stock={4} onAdd={cantidadProd}/> */}
            </main>
        </div>
    );
}

export default App;
