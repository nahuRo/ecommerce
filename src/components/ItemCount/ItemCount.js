import { useState } from "react";

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
        <>
            <div>
                <h2>{count}</h2>
            </div>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
            <button onClick={() => onAdd(count)}>agregar al carrito</button>
        </>
    );
};
export default ItemCount