import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { firestoreDB } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [detail, setDetail]=useState([]) //use el useState para guardar esos productos que recibo por la promesa
    const [loading, setLoading] = useState(true)


    const { productId } = useParams() // es la propiedad que setea una ruta dinamica
    
    useEffect(() => {
        setLoading(true)
        getDoc(doc(firestoreDB,'products',productId))
            .then(resp => {
                const produc = { id: resp.id, ...resp.data()}
                setDetail(produc)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [productId])
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
    console.log("DETAIL CONTAINER")
    return(
        <>
            <ItemDetail {...detail}/>
        </>
    )
}

export default ItemDetailContainer