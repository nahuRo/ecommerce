import './Cart.css'
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"
import { Link } from "react-router-dom"
import { getDocs, writeBatch, query, collection, where, documentId, addDoc } from "firebase/firestore"
import { firestoreDB } from "../../services/firebase/index"

import { useForm } from "react-hook-form";

const Cart = () => {
    const { cart, clearCart, getTotal } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [loading, setLoading] = useState(false)
    const [ userInfo, setUserInfo ] = useState([])
    const [ idCompra, setIdCompra ] = useState("")


    const createOrder = () => {
        setLoading(true)
        const ordenCompra = {
            items : cart,
            comprador : userInfo,
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
                setIdCompra(id)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }  
        
    if(cart.length === 0 ){
        return(
            <div className='container noProd'>
                <h1>NO HAY PRODUCTOS</h1>
                <Link to={'/list'}>Seguir comprando</Link>
            </div>
        )
    }
    

    const onSubmitFn = e => {
        const card_Dates = {
            userName : e.userName,
            userEmail : e.userEmail,
            userTel : e.userTel,
            cardName : e.cardName,
            cardNumber : e.cardNumber,
        }
        setUserInfo(card_Dates)
    }

    if (loading) {
        return(
            <div className='cont_loading'>
                <div className='loader'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <span>Generando Orden...</span>
                </div>
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
                <form onSubmit={handleSubmit(onSubmitFn)}>
                    <div className="group__form">
                        <label htmlFor='nombre' className='form_labelCart'>Nombre Completo:</label>
                        <input type='text' id='nombre' name='userName' className='form_input'
                        {...register("userName",
                            {
                                required : {
                                    value :true,
                                    message : "El campo es Obligatorio" 
                                },
                                pattern: {
                                    value: /^[a-z ,.'-]+$/i,
                                    message: "El formato no es correcto"
                                }
                            })
                        }
                        />   
                        {errors.userName && <span>{errors.userName.message}</span>} 
                    </div>
                    <div className="group__form">
                        <label htmlFor='email' className='form_labelCart'>Email:</label>
                        <input type='email' id='email' name='userEmail' className='form_input'
                        {...register("userEmail",
                            {
                                required : {
                                    value :true,
                                    message : "El campo es Obligatorio" 
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "El formato no es correcto"
                                }
                            })
                        }
                        />   
                        {errors.userEmail && <span>{errors.userEmail.message}</span>} 
                    </div>
                    <div className="group__form">
                        <label htmlFor='phone' className='form_labelCart'>Número de Contacto:</label>
                        <input type='tel' id='phone' name='userTel' className='form_input'
                        {...register("userTel",
                            {
                                required : {
                                    value :true,
                                    message : "El campo es Obligatorio" 
                                },
                                pattern: {
                                    value: /[0-9]{11}$/i,
                                    message: "El formato no es correcto, ej. 02612786643"
                                }
                            })
                        }
                        />  
                        {errors.userTel && <span>{errors.userTel.message}</span>}
                    </div>

                    <div className="group__form">
                        <label htmlFor='nombre' className='form_labelCart'>Nombre de Tarjeta:</label>
                        <input type='text' id='nombre' name='cardName' className='form_input'
                        {...register("cardName",
                            {
                                required : {
                                    value :true,
                                    message : "El campo es Obligatorio" 
                                },
                                pattern: {
                                    value: /^[a-z ,.'-]+$/i,
                                    message: "El formato no es correcto"
                                }
                            })
                        }
                        />   
                        {errors.cardName && <span>{errors.cardName.message}</span>}
                    </div>
                    <div className="group__form">
                        <label htmlFor='number' className='form_labelCart'>Número de Tarjeta:</label>
                        <input type='tel' id='number' name='cardNumber' className='form_input'
                        {...register("cardNumber",
                            {
                                required : {
                                    value :true,
                                    message : "El campo es Obligatorio" 
                                },
                                pattern: {
                                    value: /5[1-5][0-9]{14}$/i,
                                    message: "MasterCard (16 dígitos empieza por 51 - 55 ) ej. 5105105105105100"
                                }
                            })
                        }
                        />  
                        {errors.cardNumber && <span>{errors.cardNumber.message}</span>} 
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
                            <input type='number' id='cvv' name='cvvExp' className='form_input'
                            {...register("cvvExp",
                                {
                                    required : {
                                        value :true,
                                        message : "El campo es Obligatorio" 
                                    },
                                    maxLength: {
                                        value: 3,
                                        message: "El CVV debe tener solo 3 números"
                                    }
                                })
                            }
                            />
                            {errors.cvvExp && <span>{errors.cvvExp.message}</span>} 
                        </div>
                    </div>
                    <button className='btn__cart' >Cargar Datos</button>                   
                </form>
            </div>

            <div className="cart__details">
                <h2>Articulos</h2>
                <div>
                    {cart.map(prod => <ItemCart key={prod.id} {...prod}/> )}
                </div>
                <div className="btn__cleanCart">
                    <button onClick={clearCart} className='btn__cart'>Vaciar Carrito</button>
                </div>
                <div className='totalCount'>
                    <h2>Total : $ {getTotal()}</h2>
                </div>
                <div className={userInfo.length === 0 ? "disabled" : "btn__createOrder"}>
                    <button onClick={() => createOrder()} className='btn__cart'>Generar Pedido</button>
                </div>
                <br/>
                <div>
                   {idCompra ?  <h3>id de la compra: {idCompra}</h3> : ""}
                </div>
            </div>
        </div>
        
    )
    
}

export default Cart