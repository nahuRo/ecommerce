import './ItemCart.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

import { IoIosClose } from "react-icons/io";

const ItemCart = ({ name, img, price, cantidad, id }) => {

    const { removeProd } = useContext(CartContext)

    return(
        <>
            <div className="BoxViewCartProd">
                <div className="Cont__ImgProd">
                    <img src={img} alt={name} />
                </div>
                <div className="Cont__datailsProd">
                    <div className='Cont__nameProd'>
                        <h3>{name}</h3>
                    </div>
                    <div className="Cont__cantProd">
                        <div className='Cont__Price'>
                            <span>{cantidad} x ${price}</span>
                        </div>
                    </div> 
                </div>
                <div className="Cont__Trash">
                    <button onClick={() => removeProd(id)}>
                        <IoIosClose/>
                    </button>
                </div>
            </div>
        </>
    )    
}

export default ItemCart


