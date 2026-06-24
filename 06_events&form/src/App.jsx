import React from 'react';
import UseRef from './events/UseRef';
import OnClick from './events/OnClick';
import OnChange from './events/OnChange';
import OnSubmit from './events/OnSubmit';
import PassingArgument from './events/PassingArgument';

const App = () => {
  return (
    <>
    <UseRef/> 
    <br />
    <OnClick/> 
    <br />
    <OnChange/> 
    <br />
    <OnSubmit/>
    <br />
    <PassingArgument name={"vaishali"}/>
    </>
  )
}

export default App;
