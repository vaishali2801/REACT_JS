
import React, { useState } from 'react'

const ObjectUseState_1 = () => {

    const [input ,setInput] = useState({
        name:"",
        email:"",
        address:""
    });

    const handleChange = (field,e) =>{
        setInput((prev)=>{
            return{
                ...prev,
                [field]:e.target.value
            }
        })
    }

    const handlerAdd = () =>{
        // setInput((prev)=>({...prev,input}));
        console.log(input);

        setInput({
            name:"",
            email:"",
            address:""
        });
    }
    return (
        <>
            <input type="text" placeholder="enter your name" value={input.name} onChange={(e) => handleChange("name", e)} />
            <br />
            <br />
            <input type="email" placeholder="enter your email" value={input.email} onChange={(e) => handleChange("email", e)} />
            <br />
            <br />
            <input type="text" placeholder="enter your address" value={input.address} onChange={(e) => handleChange("address", e)} />
            <br />
            <br />
            <button onClick={handlerAdd}><div>Add</div></button>
        </>
    )
}

export default ObjectUseState_1
