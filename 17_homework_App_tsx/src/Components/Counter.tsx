import React, { useState } from "react";


const Counter: React.FC = () => {

    const [count, setCount] = useState(0); // кортеж (массив, в котором заранее известны все элементы)
    // useState
    // React.useState()
    const [newCount, setNewCount] = useState(0);
    const [title, setTitle] = useState<string>('Counter App');
    const decrement = () => {
        // count--; Нельзя изменять значение переменной без соответствующего метода из useState. Иначе React не будет следить за изменением переменной
        setCount(count - 1); // изменяем значение переменной count
        // setCount((prevCount) => prevCount - 1) // возможность работы с актуальным (последним) значением переменной
    }
    const decrement10 = (): void => {
        setCount(count - 10);
    }

    //У React есть большое колличество заранее описанных событий и html элементов
     // здесь опсываем события onChange повешанное на элемент input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) :void => {
        setNewCount(+(event.target.value));
    }
const handleClick = (): void => {
        setCount(newCount);
        setTitle(`Counter App with count: ${newCount}`);
    }
    return (
        <>
            <h1>{title}</h1>
            <p> Count: {count}</p>
            <input type="number" value={'' + newCount} onChange={handleChange}></input>
            <button onClick={handleClick}>Change count</button>
            <button onClick={() => setCount(count + 10)}> Increment10 </button> {/* increment => number + 1 */}
            <button onClick={() => setCount(count + 1)}> Increment </button> {/* increment => number + 1 */}
            <button onClick={decrement}> Decrement </button> {/* decrement => number - 1 */}
            <button onClick={decrement10}> Decrement10 </button> {/* decrement => number - 1 */}
        </>
    )
}
export default Counter;





















