
import { useState } from 'react'

const ObjectUseStateMan_2 = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");

    const [person, setPerson] = useState([]);

    function handler(){
        setPerson((prev)=>[...prev,{name,email,address}]);
        setName("");
        setEmail("");
        setAddress("");
        console.log(person);
    }
    console.log("person");
    return (
        <>
            <input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
            <br />
            <br />
            <input type="email" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="enter your address" value={address} onChange={(e)=>setAddress(e.target.value)} />
            <br />
            <br />

            <button onClick={handler}><div>Add</div></button>
        </>
    )
}

export default ObjectUseStateMan_2
