import React, { useState } from 'react'

const Controlled = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        address: ""
    });

    const [error, setError] = useState("");
    const handleEvent = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.name === "") {
            setError("name is required!");
            return;
        }
        if (input.email === "") {
            setError("email is required!");
            return;
        }
        if (input.password === "") {
            setError("password is required!");
            return;
        }
        if (input.address === "") {
            setError("address is required!");
            return;
        }
        setError("");

        console.log(input);
        setInput({
            name: "",
            email: "",
            password: "",
            address: "",
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br />
                <input type="text" placeholder='enter your name' value={input.name} onChange={(e) => handleEvent("name", e)} />
                <br />
                <br />
                <label>Email:</label>
                <br />
                <input type="email" placeholder='enter your email' value={input.email} onChange={(e) => handleEvent("email", e)} />
                <br />
                <br />
                <label>Password:</label>
                <br />
                <input type="password" placeholder='enter your password' value={input.password} onChange={(e) => handleEvent("password", e)} />
                <br />
                <br />
                <label>Address:</label>
                <br />
                <input type="text" placeholder='enter your address' value={input.address} onChange={(e) => handleEvent("address", e)} />
                <br />
                <br />
                <button type='submit'>Submit</button>
                <h3>{error && <p style={{ color: "red" }}>{error}</p>}</h3>
            </form>
        </>
    )
}

export default Controlled;
