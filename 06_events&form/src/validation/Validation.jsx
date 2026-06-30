import React, { useState } from 'react'

const Validation_01 = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState({});

    const handleEvent = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }
    const Validation = () => {
        const newError = {};

        if (!input.email.includes("@")) {
            newError.email = "Please enter a valid email";
        }

        if (input.name === "") {
            newError.name = "Name is required";
        }

        if (input.password.length < 6) {
            newError.password = "Password must be at least 6 characters";
        }
        return newError;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validate = Validation();

        if (Object.keys(validate).length > 0) {
            setError(validate);
        } else {
            setError({});
            console.log(input);

            setInput({
                name: "",
                email: "",
                password: "",
                address: "",
            });
        }


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br />
                <input type="text" placeholder='enter your name' value={input.name} onChange={(e) => handleEvent("name", e)} />
                <br />
                {error.name ? <p style={{ color: "red" }}>{error.name}</p> : null}
                <br />
                <label>Email:</label>
                <br />
                <input type="email" placeholder='enter your email' value={input.email} onChange={(e) => handleEvent("email", e)} />
                <br />
                {error.email ? <p style={{ color: "red" }}>{error.email}</p> : null}
                <br />
                <label>Password:</label>
                <br />
                <input type="password" placeholder='enter your password' value={input.password} onChange={(e) => handleEvent("password", e)} />
                <br />
                {error.password ? <p style={{ color: "red" }}>{error.password}</p> : null}
                <br />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Validation_01;
