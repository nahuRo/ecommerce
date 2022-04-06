import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProd } from '../../productos' //traigo la funcion getProduct

const ItemListContainer = (props) => {
    const [products, setProducts]=useState([]) //use el useState para guardar esos productos que recibo por la promesa

    useEffect(() => {
        getProd().then(respuesta => { // con .then manejo la respuesta sucess de esa promesa
            setProducts(respuesta) // lleno el primer espacio del state con un array de los productos que me devolvio la promesa
        })
    }, [])
    
    return(
        <>
            <h1>{props.greeting}</h1>
            <ItemList listadoProd={products}/>
        </>
    )
}

export default ItemListContainer