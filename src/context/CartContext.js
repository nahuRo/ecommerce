import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])

    const addProd = (prodToAdd) => {
        if (IsInCart(prodToAdd.id)) {
            const newProds = cart.map( prod => {
                if (prod.id === prodToAdd.id) {
                    const newProd = {
                        ...prod, cantidad:prodToAdd.cantidad
                    }
                    return newProd
                }else{
                    return prod
                }
            })
            setCart(newProds)
        }else{
            setCart([...cart, prodToAdd])
        }
    }
    
    const getCantidad = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.cantidad
        })
        return count
    }

    const getProdCantidad = (id) => {
        return cart.find( prod => prod.id === id)?.cantidad
    }

    const IsInCart = (id) => {    
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => setCart([])

    const removeProd = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.cantidad * prod.price
        })
        
        return total
    }

    return (
        <CartContext.Provider value={{ 
            cart, 
            addProd, 
            getCantidad, 
            IsInCart, 
            clearCart,
            removeProd,
            getProdCantidad,
            getTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext