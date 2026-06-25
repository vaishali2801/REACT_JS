import React from 'react';
import UseRef from './events/UseRef';
import OnClick from './events/OnClick';
import OnChange from './events/OnChange';
import OnSubmit from './events/OnSubmit';
import PassingArgument from './events/PassingArgument';
import Conditional from './events/Conditional_01';
import Conditional_02 from './events/Conditional_02';


const App = () => {
  return (
    <>
    {/* <UseRef/> 
    <br />
    <OnClick/> 
    <br />
    <OnChange/> 
    <br />
    <OnSubmit/>
    <br />
    <PassingArgument name={"vaishali"}/> */}
    <Conditional/>
    <Conditional_02/>
    </>
  )
}

export default App;
