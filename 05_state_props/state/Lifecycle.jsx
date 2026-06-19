
import { useEffect, useState } from 'react'

const Lifecycle = () => {
    const [name ,setName] = useState("");

    //for all 
    // useEffect(()=>{
    //     console.log("lifecycle");
    // });

    //empty dependency or mount
    // useEffect(()=>{
    //     console.log("empty dependency....");    
    // },[]);


    //update 
    // useEffect(()=>{
    //     console.log("depend on name ")
    // },[name])

    //unmount
    useEffect(()=>{
        return ()=>{
            console.log("this is unmount")
        }
    });

    return (
        <>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value) }} />
            <h1>you typed {name}</h1>
        </>
    )
}

export default Lifecycle;
