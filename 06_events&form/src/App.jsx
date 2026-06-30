import React from 'react';
import UseRef from './events/UseRef';
import OnClick from './events/OnClick';
import OnChange from './events/OnChange';
import OnSubmit from './events/OnSubmit';
import PassingArgument from './events/PassingArgument';
import Conditional from './events/Conditional_01';
import Conditional_02 from './events/Conditional_02';
import ControlledForm from './forms/ControlledForm';
import UncontrolledForm from './forms/UncontrolledForm';
import Validation_01 from './validation/Validation';
import Formik from './validation/Formik';


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
    {/* <Conditional/> */}
    {/* <Conditional_02/> */}
    {/* <h1>Controlled form</h1>
    <ControlledForm/>
    <br />
    <h1>UnControlled form</h1>
    <UncontrolledForm/> */}
    {/* <Validation_01/> */}
    <br />
    <Formik/>
    </>
  )
}

export default App;
