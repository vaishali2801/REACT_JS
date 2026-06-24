import React, { useState } from 'react'

const State_01 = () => {
    const [form , setInput] = useState("");
    return (
        <>  
            <h2><label htmlFor="">Text</label></h2>
            <br />
            <input type="text" value={form} placeholder="enter text" 
            onChange={(e)=>setInput(e.target.value)}/>
            <h1>you type {form}</h1>
        </>
    );
}

export default State_01;
