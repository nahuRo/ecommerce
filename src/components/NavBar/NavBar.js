import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { getDocs, collection } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'
import UserContext from "../../context/UserContext";

const NavBar = () => {
  const { User } = useContext(UserContext)
  const [categories, setCategories] = useState([])

  
  console.log(User?.nombre)

  useEffect(() => {
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
    <nav className="">
      <div>
        <Link to='/'>DiTech</Link> {/*link es como una etiqueta a y el to es como src*/}
      </div>
      <div>
        <NavLink to="/list" className={({ isActive}) => isActive ? 'active' : 'notActive'}>List</NavLink> {/*NavLink es como Link pero me deja usar una propiedad isActive*/}
        {categories.map(e => <NavLink to={`/marca/${e.description}`} key={e.id}>{e.description}</NavLink>)}
      </div>
      <div>
        <div>
          <Link to='/loginUi'>User: {User || "Nadie" }</Link>
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
