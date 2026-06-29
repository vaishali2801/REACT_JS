import {useRef} from 'react'

const UncontrolledForm = () => {
    const inputRef = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const name = inputRef.current.value;
        console.log("name" ,name);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter name' ref={inputRef} />
            <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default UncontrolledForm
