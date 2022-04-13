import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProdById } from '../../productos' //traigo la funcion getProduct
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detail, setDetail]=useState([]) //use el useState para guardar esos productos que recibo por la promesa

    const { productId } = useParams() // es la propiedad que setea una ruta dinamica
    useEffect(() => {
        getProdById(productId).then(respuesta => { // con .then manejo la respuesta sucess de esa promesa
            setDetail(respuesta) // lleno el primer espacio del state con un array de los productos que me devolvio la promesa
        }).catch(error => console.log(error))
    }, [productId])

    return(
        <>
            <ItemDetail listadoDetail={detail}/>
        </>
    )
}

export default ItemDetailContainer