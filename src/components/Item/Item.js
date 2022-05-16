import "./Item.css";
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {

  	return (
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
					<Link to={`/detail/${id}`}>Ver más</Link>
				</div>
			</div>
    	</>
  	);
};

export default Item;
