
import React, { useState } from 'react'

const Conditional_02 = () => {
    const [color , setColor] = useState("pink");

    let content;

    if(color === "blue"){
        content = <h1 style={{color:"blue"}}>you select blue color </h1>
    }else if(color === "red"){
        content = <h1 style={{color:"red"}}>you select red color</h1>
    }else if(color === "green"){
        content = <h1 style={{color:"green"}}>you select green color</h1>
    }else if(color === "yellow"){
        content = <h1 style={{color:"yellow"}}>you select yellow color</h1>
    }else if(color === "orange"){
        content = <h1 style={{color:"orange"}}>you select orange color</h1>
    }else if(color === "pink"){
        content = <h1 style={{color:"pink"}}>you select pink color</h1>
    }
    else{
        content = <h1>you not select right color</h1>
    }

    return (
        <>
        {content}
        </>
    )
}

export default Conditional_02
