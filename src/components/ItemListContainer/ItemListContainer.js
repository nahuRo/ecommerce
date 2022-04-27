import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]) //use el useState para guardar esos productos que recibo por la promesa

    const { productMarc } = useParams()

    useEffect(() => {

        const collectionRef = productMarc ? query(collection(firestoreDB,'products'), where('marca', '==', productMarc)) : collection(firestoreDB,'products')

        getDocs(collectionRef) // traigo mis datos de firestore
            .then(resp => {
                console.log(resp)
                const products = resp.docs.map(doc => {
                    return {id: doc.id, ...doc.data()} // doc me devuelve 2 posiciones una donde tengo el id y la otra el resto de campos
                })
                setProducts(products)
            })
            .catch(error => console.log(error))
    }, [productMarc])
    
    return(
        <>
            <h1>{greeting}</h1>
            <ItemList listadoProd={products}/>
        </>
    )
}

export default ItemListContainer