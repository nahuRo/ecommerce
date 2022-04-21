import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CarWidget = () => {

    const { getCantidad } = useContext(CartContext)
    return(
        <div className = 'CartWidget'>
            <i className="fa-solid fa-cart-shopping"></i> 
            {getCantidad()}
        </div>
    )
}

export default CarWidget