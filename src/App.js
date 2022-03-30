import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
       <NavBar/> {/*traigo mi primer componte (NavBar) */}
      </header>
      <main>
        <ItemListContainer greeting = 'Saludo desde itemListContainer'/>
      </main>
    </div>
  );
}

export default App;
