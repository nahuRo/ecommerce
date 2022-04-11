import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProdById } from '../../productos' //traigo la funcion getProduct

const ItemDetailContainer = () => {
    const [detail, setDetail]=useState([]) //use el useState para guardar esos productos que recibo por la promesa

    useEffect(() => {
        getProdById().then(respuesta => { // con .then manejo la respuesta sucess de esa promesa
            setDetail(respuesta) // lleno el primer espacio del state con un array de los productos que me devolvio la promesa
        })
    }, [])
    return(
        <>
            <ItemDetail listadoDetail={detail}/>
        </>
    )
}

export default ItemDetailContainer