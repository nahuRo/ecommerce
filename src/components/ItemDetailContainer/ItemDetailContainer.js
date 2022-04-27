import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
// import { getProdById } from '../../productos' //traigo la funcion getProduct
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [detail, setDetail]=useState([]) //use el useState para guardar esos productos que recibo por la promesa

    const { productId } = useParams() // es la propiedad que setea una ruta dinamica
    
    useEffect(() => {
        // getProdById(productId).then(respuesta => { // con .then manejo la respuesta sucess de esa promesa
        //     setDetail(respuesta) // lleno el primer espacio del state con un array de los productos que me devolvio la promesa
        // }).catch(error => console.log(error))

        getDoc(doc(firestoreDB,'products',productId))
            .then(resp => {
                const produc = { id: resp.id, ...resp.data()}
                setDetail(produc)
            })
            .catch(error => console.log(error))
    }, [productId])

    return(
        <>
            <ItemDetail {...detail}/>
        </>
    )
}

export default ItemDetailContainer