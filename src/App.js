import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
function App() {

    const cantidadProd = (cant) => {
        console.log(`${cant} cantidad de productos agregados al carrito`)
    }

    return (
        <div className="App">
            <header>
                <NavBar/>
            </header>
            <main>
                <ItemListContainer greeting = 'Saludo desde itemListContainer'/>
                <ItemCount initial={0} stock={4} onAdd={cantidadProd}/>
            </main>
        </div>
    );
}

export default App;
