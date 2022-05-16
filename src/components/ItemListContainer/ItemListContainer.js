import './ItemListContainer.css'

import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [ products, setProducts ] = useState([]) //use el useState para guardar esos productos que recibo por la promesa
    const [ loading, setLoading ] = useState(true) // estado para la animacion de cargando

    const { productMarc } = useParams()

    useEffect(() => {
        setLoading(true)

        // setTimeout(()=> { // lo agrego para que se pueda apreciar el efecto del loading ya que sin este carga muy rapido y no se ve

            const collectionRef = productMarc 
                ? query(collection(firestoreDB,'products'), where('marca', '==', productMarc)) 
                : collection(firestoreDB,'products')
            getDocs(collectionRef) // traigo mis datos de firestore
                .then(resp => {
                    const products = resp.docs.map(doc => {
                        return {id: doc.id, ...doc.data()} // doc me devuelve 2 posiciones una donde tengo el id y la otra el resto de campos
                    })
                    setProducts(products)
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        // },2500)
        
    }, [productMarc])

    if (loading) {
        return(
            <div className='cont_loading'>
                <div className='loader'>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <div className='ball'></div>
                    <span>Loading...</span>
                </div>
            </div>
        )
    }
    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }
    console.log("LIST CONTAINER")
    return(
        <div className="cont__Prod container">
            <div className="filters">
                s
            </div>
            <div className="cardItems">
                <ItemList listadoProd={products}/>
            </div>
        </div>
    )
}

export default ItemListContainer