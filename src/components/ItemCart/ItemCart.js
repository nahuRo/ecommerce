import './ItemCart.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
const ItemCart = ({ name, img, price, cantidad, id }) => {

    const { removeProd } = useContext(CartContext)
   
    return(
        <>
            <div className="BoxViewCartProd">
                <div className="ContImg">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                </div>
                <div>
                    contador
                </div>
                <div className="ContTrash">
                    <p>cantidad {cantidad}</p>
                    <h2>${price * cantidad}</h2>
                    <button onClick={() => removeProd(id)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </>
    )    
}

export default ItemCart


