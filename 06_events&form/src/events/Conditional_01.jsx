
import React, { useState } from 'react'

const Conditional = () => {
    const [login,setLogin] = useState(false);
    const [user,setUser] = useState(true);
    return (
        <>
            <h1>{login ? "welcome" : "click to login"}</h1>
            <button onClick={()=>setLogin(!login)}>{login ? "logout" : "login"}</button>
            <h2>{user && <h3>welcome</h3>}</h2>
        </>
    )
}

export default Conditional;
