import { useContext } from "react"
import './Cart.css'
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
import { getDocs, writeBatch, query, collection, where, documentId, addDoc } from "firebase/firestore"
import { firestoreDB } from "../../services/firebase/index"

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext)

    

    const createOrder = () => {
        const ordenCompra = {
            items : cart,
            comprador : {
                name : "Agustin Rodriguez",
                phone : 12345678732,
                email : "aaaa@gmail.com"
            },
            total : 12222,
            date : new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDB)

        const colleRef = collection(firestoreDB, "products")

        const outOfStock = []

        getDocs(query(colleRef, where(documentId(),"in",ids)))
            .then(resp => {
                resp.docs.forEach(doc => {
                    const datosDoc = doc.data()
                    const prodCant = cart.find(prod => prod.id === doc.id)?.cantidad

                    if(datosDoc.stock >= prodCant){
                        batch.update(doc.ref, { stock : datosDoc.stock - prodCant})
                    }else{
                        outOfStock.push({ id : doc.id, ...datosDoc})
                    }
                })
            })
            .then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDB, "orders")
                    return addDoc(collectionRef, ordenCompra)
                }
            })
            .then(( { id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            })
            .catch(error => console.log(error))
    }  
        

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
                <button onClick={() => createOrder()}>Generar Pedido</button>

            </div>
        </>
    )
}

export default Cart