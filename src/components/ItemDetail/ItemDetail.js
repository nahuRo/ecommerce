import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";


import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";

const ItemDetail = ( {img, name, price, description, id, stock, features, top, opinions} ) => {

	const { addProd, getProdCantidad } = useContext(CartContext)

	const [ cantToCart, setCantToCart ] = useState(0)

	const cantidadProd = (cant) => {
		addProd({img, name, price, description, id, cantidad:cant})
		setCantToCart(cant)
	}
	
	console.log("ITEM DETAIL");
  	return (
    // card del detalle
		<div className="container">
			<div className="cardDetail">
				<div className="cont__imgD">
					<img src={img} alt={name}/>
				</div>

				<div className="cont__detailD">

					<div>
						<div className="quality">
							<span>Nuevo | vendido 1908</span>
						</div>
						<div className="nameProd">
							<h2>{name}</h2>
						</div>
						<div className="starsBox">
							<span className="starsAmount"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></span>
							<span className="opiniosaAmount">{`${opinions} opiniones`}</span>
						</div>
					</div>
					<div className="mostSellers">
						<span>MAS VENDIDO</span>
						<span>{top <= 5 ? `${top}º en Celulares y Smartphones` : ""}</span>
					</div>
					<div className="priceProd">
						<div className="numberProd">
							<p><span>$</span>{price}</p>
						</div>
						<div className="partsProd">
							en 12 x {price/12}
						</div>
					</div>
					<div className="colorProd">
						<p>color: azul</p>
					</div>
					<div className="detailsProd">
						<p>Lo que tenés que saber de este producto</p>
						<ul className="listDetails">{features.map(caract => <li>{caract}</li>)}</ul> 
					</div>
				</div>
				<div className="cont__payD">
					<div className="titleStock">
						<p>Stock disponible</p>
					</div>
					<div className="dropMenu">
						<p>Cantidad:<span>({`disponible ${stock - cantToCart}`})</span></p>
					</div>
					<div className="btn__goCart">
						{ cantToCart > 0 ? <NavLink to='/cart'>Ir a Carrito</NavLink> : <ItemCount initial={getProdCantidad(id)} stock={stock} onAdd={cantidadProd}/>}
					</div>
					<div className="benefits">
						<ul>
							<li>
								<RiArrowLeftRightLine className="iconB"/><span>Devolución gratis.</span><p>Tenés 30 días desde que lo recibís.</p>
							</li>
							<li>
								<BiCheckShield className="iconB"/><span>Compra Protegida.</span><p>Se abrirá en una nueva ventana, recibí el producto que esperabas o te devolvemos tu dinero.</p>
							</li>
							<li>
								<AiOutlineTrophy className="iconB"/><span>Mercado Puntos,</span><p>Sumás 529 puntos.</p>
							</li>
							<li>
								<RiMedalLine className="iconB"/><p>12 meses de garantía de fábrica</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="cont__descriptionDP">
				<h2>Descripción del Producto</h2>
				<div>{description.split(".").map(par => <p className="parrafDescription">{par}.<br/><br/></p>)}</div>
			</div>
		</div>
		
  	);
};

export default ItemDetail;
