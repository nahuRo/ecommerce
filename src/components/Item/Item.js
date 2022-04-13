import "./Item.css";
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
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
					<div>
						<button>Comprar</button>
					</div>	
					<div>
						<Link to={`/detail/${id}`}>Ver más</Link>
					</div>
				</div>
			</div>
    	</>
  	);
};

export default Item;
