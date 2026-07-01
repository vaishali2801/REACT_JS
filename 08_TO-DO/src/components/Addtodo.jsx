import React, { useState } from 'react'

const AddToDo = ({ handleAdd }) => {
    const [input, setInput] = useState({
        task: "",
        description: ""
    });
    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }
    // console.log(input);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.task || !input.description) {
            alert("Please fill all fields");
            return;
        }
        handleAdd(input);
        setInput({
            task: "",
            description: "",
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter task' value={input.task} onChange={(e) => handleChange("task", e)} />
                <input type="text" placeholder='enter description' value={input.description} onChange={(e) => handleChange("description", e)} />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default AddToDo;
