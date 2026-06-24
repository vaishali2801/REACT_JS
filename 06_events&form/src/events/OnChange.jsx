import React, { useState } from 'react'

const OnChange = () => {
    const [input,setInput] = useState("");

    return (
        <>
            <input type="text" placeholder='enter your text' value={input} 
            onChange={(e)=>setInput(e.target.value)}/>
            <h1>your text is {input}</h1>
        </>
    )
}

export default OnChange;
