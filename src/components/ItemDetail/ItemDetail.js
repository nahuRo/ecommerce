import "./ItemDetail.css";


const ItemDetail = ( {listadoDetail} ) => {
  	// desestructuro las propiedades que voy a usar
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
		</div>
  	);
};

export default ItemDetail;
