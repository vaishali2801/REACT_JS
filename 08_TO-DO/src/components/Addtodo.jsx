import React, { useEffect, useState } from 'react'

const AddToDo = ({ handleAdd, editVal }) => {

    const [input, setInput] = useState({
        task: "",
        description: ""
    });

    useEffect(() => {
        if (editVal) {
            setInput(editVal);
        }
    }, [editVal]);

    // for user input 
    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }
    // console.log(input);
    //submit function
    const handleSubmit = (e) => {
        e.preventDefault();
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
                <br />
                <input type="text" placeholder='enter description' value={input.description} onChange={(e) => handleChange("description", e)} />
                <br />
                <br />
                <button type='submit'>{editVal ? "update" : "Add"}</button>
            </form>
        </>
    )
}

export default AddToDo;
