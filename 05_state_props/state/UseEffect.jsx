
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [user,setUser] = useState([]);

    const [error,setError] = useState("")

    useEffect(()=>{
        async function fetchUserData() {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");

                const data = await res.json();

                if(data.length == 0){
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
                                return(
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.address["street"]}</td>
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