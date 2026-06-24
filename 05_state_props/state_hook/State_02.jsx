import React, { useState } from 'react'

const State_02 = () => {
    const [count ,setCount] = useState(0);

    const increment = () =>{
        setCount((preCount)=>preCount+1);
    }
    const incrementBy = () =>{
        increment();
        increment();
        increment();
        increment();
        increment();
    }
    return (
        <>
            <h1>Previous state concept</h1>
            <button onClick={increment}><h2>Increment +1</h2></button>
            <button onClick={incrementBy}><h2>Increment +5</h2></button>
            <h1>my value is {count}</h1>
        </>
    )
}

export default State_02;
