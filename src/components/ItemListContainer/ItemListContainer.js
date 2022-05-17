import './ItemListContainer.css'

import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [ products, setProducts ] = useState([]) 
    const [ loading, setLoading ] = useState(true) 

    const { productMarc } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = productMarc 
            ? query(collection(firestoreDB,'products'), where('marca', '==', productMarc)) 
            : collection(firestoreDB,'products')
        getDocs(collectionRef) 
            .then(resp => {
                const products = resp.docs.map(doc => {
                    return {id: doc.id, ...doc.data()} 
                })
                setProducts(products)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        
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
        <div className='container noProd'>
                <h1>NO HAY PRODUCTOS</h1>
        </div>
    }

    return(
        <div className="cont__Prod container">
            <ItemList listadoProd={products}/>
        </div>
    )
}

export default ItemListContainer