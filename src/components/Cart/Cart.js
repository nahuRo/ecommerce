import { useContext } from "react"
import './Cart.css'
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"


const Cart = () => {
    const { cart, clearCart } = useContext(CartContext)

    if(cart.length === 0 ){
        return(
            <>
                <h1>NO HAY PRODUCTOS</h1>
                <Link to={'/list'}>Ver Telefonos</Link>
            </>
        )
    }

    return (
        <>
            <div className="ContViewCartProd">
                {cart.map(prod => <ItemCart key={prod.id} {...prod}/> )}
            </div>
            <div>
                <button onClick={() => clearCart()}>Vaciar Carrito</button>
            </div>
        </>
    )
}

export default Cart