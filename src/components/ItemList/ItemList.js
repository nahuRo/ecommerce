import "./ItemList.css";
import Item from "../Item/Item"


const ItemList = ({listadoProd}) =>{ 
    return(
        <>
            {listadoProd.map(item => <Item key={item.id} {...item}/>)}
        </>
    )
}


export default  ItemList