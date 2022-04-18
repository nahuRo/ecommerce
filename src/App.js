import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import PieDePagina from './components/PieDePagina/PieDePagina';

function App() {

    return(
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <Outlet/> {/* aqui van todas las rutas hijos, en las rutas anidadas*/}
            </main>
            <footer>
                <PieDePagina/>
            </footer>
        </>
    )
}

export default App;
