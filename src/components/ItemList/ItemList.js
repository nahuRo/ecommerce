import "./ItemList.css";
import Item from "../Item/Item"


const ItemList = ({listadoProd}) =>{ // las props vienen en objeto por eso desestructuro con llaves y traigo listadoProd (nombre de los atributos)
    return(
        <>
            {listadoProd.map(item => <Item key={item.id} {...item}/>)}{/*le paso todas las propiedades propias por cada iteracion en un objeto*/}
        </>
    )
}


export default  ItemList