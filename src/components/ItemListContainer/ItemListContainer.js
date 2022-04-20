import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProd } from '../../productos' //traigo la funcion getProduct
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]) //use el useState para guardar esos productos que recibo por la promesa

    const { productMarc } = useParams()

    useEffect(() => {
        getProd(productMarc).then(respuesta => { // con .then manejo la respuesta sucess de esa promesa
            setProducts(respuesta) // lleno el primer espacio del state con un array de los productos que me devolvio la promesa
        }).catch(error => console.log(error))
    }, [productMarc])
    
    return(
        <>
            <h1>{greeting}</h1>
            <ItemList listadoProd={products}/>
        </>
    )
}

export default ItemListContainer