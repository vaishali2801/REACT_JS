import React from 'react'

const OnClick = () => {
    const handle = () =>{
        alert("hello");
    }

    return (
        <>
            <button onClick={handle}>CLICK</button>
        </>
    )
}

export default OnClick
