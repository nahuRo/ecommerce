import "./Item.css";

const Item = ({ name, img, price }) => {
  	// desestructuro las propiedades que voy a usar
  	return (
    // card del producto
    	<>
			<div className="myCard">
				<div className="contImgCard">
					<img src={img} alt={name} />
				</div>
				<div className="contDatesCard">
					<h2>{name}</h2>
					<p>${price}</p>
				</div>
				<div className="contBtnCard">
					<button>Comprar</button>
				</div>
			</div>
    	</>
  	);
};

export default Item;
