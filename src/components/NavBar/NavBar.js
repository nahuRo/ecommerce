import "./NavBar.css";

// import Navegacion from "../Navegacion/Navegacion";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
// import { getCategories } from '../../productos'
import { useState, useEffect } from "react";

import { getDocs, collection } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'

const NavBar = () => {
  const [categories, setCategories]=useState([])

  useEffect(() => {
    // getCategories().then(respuesta => { 
    //   setCategories(respuesta) 
    // }).catch(error => console.log(error))

    getDocs(collection(firestoreDB, 'categories',))
      .then(resp => {
        const categoriesD = resp.docs.map(doc => { 
          return {id: doc.id, ...doc.data()}
        })
        setCategories(categoriesD)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <nav>
      <div>
        <Link to='/'>DiTech</Link> {/*link es como una etiqueta a y el to es como src*/}
      </div>
      <div>
        {/* <Navegacion/> */}
        <NavLink to="/list" className={({ isActive}) => isActive ? 'active' : 'notActive'}>List</NavLink> {/*NavLink es como Link pero me deja usar una propiedad isActive*/}
        {categories.map(e => <NavLink to={`/marca/${e.description}`} key={e.id}>{e.description}</NavLink>)}
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
