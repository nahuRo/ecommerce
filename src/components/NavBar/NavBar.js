import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { getDocs, collection } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'


const NavBar = () => {
  const [categories, setCategories] = useState([])


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
    <nav className="navBar">
      <div>
        <Link to='/'>DiTech</Link> 
      </div>
      <div className="linksBox">
        {categories.map(e => <NavLink to={`/marca/${e.description}`} key={e.id}>{e.description}</NavLink>)}
      </div>
      <div>
          <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
