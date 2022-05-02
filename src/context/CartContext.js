import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])

    const addProd = (prodToAdd) => {
        setCart([...cart, prodToAdd])
    }
    
    const getCantidad = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.cantidad
        })
        return count
    }

    const IsInCart = (id) => cart.some(prod => prod.id === id)

    const clearCart = () => setCart([])

    const removeProd = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    return (
        <CartContext.Provider value={{ 
            cart, 
            addProd, 
            getCantidad, 
            IsInCart, 
            clearCart,
            removeProd
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext