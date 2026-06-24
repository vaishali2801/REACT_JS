
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [user,setUser] = useState([]);

    const [error,setError] = useState("")

    useEffect(()=>{
        async function fetchUserData() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");

                const data = await res.json();

                if(!res.ok){
                    return setError("no error");
                }
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserData();
    },[])

    return (
        <>
            {
                error ?<>
                
                <p>{error}</p>

                </> 
                : <> 
                <table border={2}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((u)=>{
                                const {id,name,email,address:{street,city}} = u ;
                                return(
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{street},{city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </>
            }
        </>
    )
}

export default UseEffect;