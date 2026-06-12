import { useState } from "react";

const State = ()=>{
    const [count,setCount] = useState(0);
    const clk = ()=>{
        setCount(count + 1);
    }
    const cls = ()=>{
        setCount(count - 1);
    }
    const set = ()=>{
        setCount(0);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={clk}><h2>INCREMENT+</h2></button>
        <button onClick={cls}><h2>DECREMENT-</h2></button>
        <button onClick={set}><h2>SET 0</h2></button>
        </>
    )
}
export default State;