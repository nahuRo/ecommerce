import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }else{
            console.log(`supera el stock de ${stock}, no puede agregar mas productos de este tipo`)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }else{
            console.log(`no puede agregar un número negativo de productos`)
        }
    }

    return (
        <div className="count">
            <div>
                <h2>{count}</h2>
            </div>
            <div className="contBtnCount">
                <button className="btnCount" onClick={increment}> + </button>
                <button className="btnCount" onClick={decrement}> - </button>
            </div>
            <div style={{textAlign:'center'}}>
                <button className="btnAddProd" onClick={() => onAdd(count)}>agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount