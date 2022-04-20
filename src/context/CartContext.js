import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])
    console.log(cart)
    return (
        <CartContextProvider value={{ cart, setCart }}>
            {children}
        </CartContextProvider>
    )
}

export default CartContext