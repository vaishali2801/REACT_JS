import React from 'react'

const PassingArgument = ({name}) => {
    const handler = () =>{
        alert(`hello  ${name}`)
    }

    return (
        <>
            <button onClick={()=>handler(name)}>PassingArgument</button>
        </>
    )
}

export default PassingArgument;
