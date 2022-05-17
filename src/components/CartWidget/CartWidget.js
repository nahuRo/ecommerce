import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CarWidget = () => {

    const { getCantidad } = useContext(CartContext)

    return(
        <div className = {`${getCantidad() === 0 ?'CartWidgetNone' : 'CartWidget' }`} >
            <Link to={"/cart"}><i className="icon fa-solid fa-cart-shopping"></i></Link>
            { getCantidad() }
        </div>
    ) 
}

export default CarWidget