// useRef is a React Hook that allows you to create a mutable reference that 
// persists across component re-renders.

//1. Access DOM Elements Directly
//useRef is commonly used to access and manipulate DOM elements without using document.getElementById().

//2. Store Values Without Re-rendering
//Unlike useState, updating a useRef value does not cause the component to re-render.

import {useRef} from 'react'

const UseRef = () => {
    const inputRef = useRef(null);

    const handleClick = () =>{
        inputRef.current.focus();
        // inputRef.current.value();
    }
    console.log("input ",inputRef);
    return (
        <>
            <input type="text" placeholder='enter your name' ref = {inputRef} />
            <br />
            <br />
            <button onClick={handleClick}>click me ✅</button>
        </>
    )
}

export default UseRef;
