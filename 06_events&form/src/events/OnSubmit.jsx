import React, { useState } from 'react'

const OnSubmit = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [person, setPerson] = useState([]);

    const submitEvent = (e) => {
        e.preventDefault();
        setPerson((prev) => [...prev, input]);
        setInput({
            name: "",
            email: "",
            password: ""
        });
    }

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }

    return (
        <>
            <form onSubmit={submitEvent}>
                <label > Name:</label>
                <br />
                <input type="text" value={input.name} placeholder='enter name' 
                onChange={(e) => handleChange("name", e)} />
                <br />
                <br />
                <label > Email:</label>
                <br />
                <input type="email" value={input.email} placeholder='enter Email' 
                onChange={(e) => handleChange("email", e)} />
                <br />
                <br />
                <label > Password:</label>
                <br />
                <input type="password" value={input.password} placeholder='enter Password' 
                onChange={(e) => handleChange("password", e)} />
                <br />
                <br />
                <button type='submit'>Submit</button>
            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        person.map((p, index) => {
                            return (
                                <tr key={index}>
                                    <td>{p.name}</td>
                                    <td>{p.email}</td>
                                    <td>{p.password}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default OnSubmit;
