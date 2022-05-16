import './ItemCart.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

import { IoIosClose } from "react-icons/io";
import ItemCount from '../ItemCount/ItemCount';


const ItemCart = ({ name, img, price, cantidad, id }) => {

    const { removeProd } = useContext(CartContext)
    console.log("CART ITEM")
    return(
        <>
            <div className="BoxViewCartProd">
                <div className="Cont__ImgProd">
                    <img src={img} alt="" />
                </div>
                <div className="Cont__datailsProd">
                    <div className='Cont__nameProd'>
                        <h2>{name}</h2>
                        <p>{cantidad}</p>
                    </div>
                    <div className="Cont__cantProd">
                        <div>
                            {/* <ItemCount/> */}
                        {/* <ItemCount initial={0} stock={stock} onAdd={cantidadProd}/> */}
                        </div>
                        <div className='Cont__Price'>
                            <h2><span>$</span>{price}</h2>
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


