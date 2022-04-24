import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ( {img, name, price, description, id} ) => {

	const { addProd, IsInCart } = useContext(CartContext)

	const cantidadProd = (cant) => {
		addProd({img, name, price, description, id, cantidad:cant})
	}

  	return (
    // card del detalle
		<div className="myCardDetail">
			<div className="contImgCardDetail">
				<img src={img} alt={name}/>
			</div>
			<div>
				<h1>{name}</h1>
				<h4>${price}</h4>
				{description}
				<div className="contBtnCard">
					<button>Comprar</button>
				</div>
			</div>
			<div>
				{ IsInCart(id) ? <NavLink to='/cart'>Ir a Carrito</NavLink> : <ItemCount initial={0} stock={4} onAdd={cantidadProd}/>}	
			</div>
		</div>
  	);
};

export default ItemDetail;
