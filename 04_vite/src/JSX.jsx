
import React from 'react';

//without jsx
// const JSX = () => {
//     let element = React.createElement("h1", null, "without jsx text");

//    element = <h1>this is text with jsx</h1>;
    // return(
    //     <h1>{element}</h1>
    // )
// };

//with jsx

const JSX = () => {
    const element = <h1>this is jsx example</h1>;
    return (
        <>
        {element}
        </>
    );
};

export default JSX;