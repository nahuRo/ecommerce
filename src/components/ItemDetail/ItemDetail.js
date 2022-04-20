import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ItemDetail = ( {listadoDetail} ) => {

	const [ cantidad, setCantidad ] = useState(0)

	const { cart, setCart } = useContext(CartContext)

	const cantidadProd = (cant) => {
		setCantidad(cant)
		setCart([...cart, {...listadoDetail, cantidad:cant}])
	}

	console.log(cart)


  	return (
    // card del detalle
		<div className="myCardDetail">
			<div className="contImgCardDetail">
				<img src={listadoDetail.img} alt={listadoDetail.name}/>
			</div>
			<div>
				<h1>{listadoDetail.name}</h1>
				<h4>${listadoDetail.price}</h4>
				{listadoDetail.description}
				<div className="contBtnCard">
					<button>Comprar</button>
				</div>
			</div>
			<div>
				{cantidad > 0 ? <NavLink to='/cart'>Ir a Carrito</NavLink> : <ItemCount initial={0} stock={4} onAdd={cantidadProd}/>}	
			</div>
		</div>
  	);
};

export default ItemDetail;
