import React, { useState } from "react";

const Counter = () => {
    // let count = 0;
    const [count, setCount] = useState(0);// кортеж (массив в котором заранее известны элементы)
    // useState
    // React.useState()

    const increment = () => {
        // count--; Нельзя изменять значение переменной без соответствующего метода из useState. Иначе React не будет
        setCount(count + 1);// изменяем значение переменной count
        // setCount((prevCount) => prevCount -1) //аозможность работы с актуальным значением переменной
    };

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    );
};

export default Counter;