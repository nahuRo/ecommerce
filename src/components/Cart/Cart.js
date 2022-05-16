import './Cart.css'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
import { getDocs, writeBatch, query, collection, where, documentId, addDoc } from "firebase/firestore"
import { firestoreDB } from "../../services/firebase/index"
// import Formulario from "../Formulario/Formulario"

// Icons
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCreditCard } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa";

const Cart = () => {
    const { cart, clearCart, getTotal, user } = useContext(CartContext)
    const [ payPal, setPayPal ] = useState(false)
    const [loading, setLoading] = useState(false)

    // const [ credit, setCredit ] = useState(false)


    const createOrder = () => {
        setLoading(true)
        const ordenCompra = {
            items : cart,
            comprador : user,
            total : getTotal(),
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
            .finally(() => setLoading(false))
    }  
        

    if(cart.length === 0 ){
        return(
            <>
                <h1>NO HAY PRODUCTOS</h1>
                <Link to={'/list'}>Ver Telefonos</Link>
            </>
        )
    }
    // evento del formulario
    const subir = e => {
        e.preventDefault()
        const card_Dates = {
            cardTitle : e.target.cardName.value,
            cardNumber : e.target.cardNumber.value,
            cardDayExp : e.target.cardDayExp.value,
            cardMonthExp : e.target.cardMonthExp.value,
            cardCvv :  e.target.cvvExp.value,
            typePay : payPal ? "PayPal" : "CreditCard"
        }
        console.log(card_Dates)
    }
    const btnPaypal = () => {
        setPayPal(!payPal)
    }
    console.log("CART")
    if (loading) {
        return(
            <div className='cont_loading'>
                <div className='loader'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <span>Loading...</span>
                </div>
                <h2>Generando Orden</h2>
            </div>
        )
    }


    return (
        <div className="cart__container container">
            <div className="cart__title">
                <h2><i className="fa-solid fa-cart-shopping"></i> Compras</h2>
                <hr/>
            </div>

            <div className="card__dates">
                <h3>Detalles de la compra</h3>
                <form onSubmit={subir}>
                    <div className="pay__method">
                        <button onClick={btnPaypal}>
                            <FaPaypal/>
                            <span>PayPal</span>
                            <AiFillCheckCircle className={payPal ? "check__active" : ""}/>
                        </button>
                        <button>
                            <AiFillCreditCard />
                            <span>Tarjeta de Credito</span>
                            <AiFillCheckCircle/>
                        </button>
                    </div>
                    <div className="group__form">
                        <label htmlFor='nombre' className='form_labelCart'>Nombre de Tarjeta:</label>
                        <input type='text' id='nombre' placeholder=' ' name='cardName' className='form_input'/>   
                    </div>
                    <div className="group__form">
                        <label htmlFor='number' className='form_labelCart'>Número de Tarjeta:</label>
                        <input type='tel' id='number' placeholder=' ' name='cardNumber' className='form_input'/>  
                    </div>
                    <div className="input__flex group__form">
                        <div className="date__Exp">
                            <label htmlFor='dayExp' className='form_labelCart'>Fecha de Exp</label>   
                            <div className="input__flex">
                                <input type='number' id='dayExp' placeholder='31' min='1' max='31' name='cardDayExp' className='form_input'/> 
                                <span className="separador">/</span> 
                                <input type='number' placeholder='12' min='1' max='12' name='cardMonthExp' className='form_input'/> 
                            </div>
                        </div>
                        <div className="cvv">
                            <label htmlFor='cvv' className='form_labelCart'>CVV</label>
                            <input type='number' id='cvv' placeholder=' ' name='cvvExp' className='form_input'/> 
                        </div>
                    </div>
                    <button className='btn__cart'>Comprar</button>
                </form>
            </div>

            <div className="cart__details">
                <h2>Articulos</h2>
                <div className="ContViewCartProd">
                    {cart.map(prod => <ItemCart key={prod.id} {...prod}/> )}
                </div>
                <div>
                    <button onClick={clearCart} className='btn__cart'>Vaciar Carrito</button>
                    <button onClick={() => createOrder()} className='btn__cart'>Generar Pedido</button>
                </div>
                <div>
                    {/* <Formulario/> */}
                </div>

                <div className='totalCount'>
                    <h2>Total : {getTotal()}</h2>
                </div>
            </div>
        </div>
        
    )
    
}

export default Cart