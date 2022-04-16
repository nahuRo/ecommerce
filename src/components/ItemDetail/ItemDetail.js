import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ( {listadoDetail} ) => {

	const [ canti, setCanti ] = useState(0)

	const cantidadProd = (cant) => {
		console.log(`${cant} cantidad de productos agregados al carrito`)
		setCanti(cant)
	}

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
				{canti > 0 ? <NavLink to='/cart'>Ir a Carrito</NavLink> : <ItemCount initial={0} stock={4} onAdd={cantidadProd}/>}	
			</div>
		</div>
  	);
};

export default ItemDetail;
