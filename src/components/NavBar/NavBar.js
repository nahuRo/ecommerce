import "./NavBar.css";

// import Navegacion from "../Navegacion/Navegacion";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { getCategories } from '../../productos'
import { useState, useEffect } from "react";

const NavBar = () => {
  const [categories, setCategories]=useState([])

  useEffect(() => {
    getCategories().then(respuesta => { 
      setCategories(respuesta) 
    }).catch(error => console.log(error))
  }, [])

  return (
    <nav>
      <div>
        <Link to='/'>DiTech</Link> {/*link es como una etiqueta a y el to es como src*/}
      </div>
      <div>
        {/* <Navegacion/> */}
        <NavLink to="/list" className={({ isActive}) => isActive ? 'active' : 'notActive'}>List</NavLink> {/*NavLink es como Link pero me deja usar una propiedad isActive*/}
        {categories.map(e => <NavLink to={`/marca/${e.id}`} key={e.id}>{e.id}</NavLink>)}
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
