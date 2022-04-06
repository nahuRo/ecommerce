import "./NavBar.css";

import Navegacion from "../Navegacion/Navegacion";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
    <nav>
        <div>
            <a href="# ">DiTech</a>
        </div>
        <div>
            <Navegacion/>
        </div>
        <div>
            <CartWidget/>
        </div>
    </nav>
  );
};

export default NavBar;
