import React from "react";
import Functional from "./components/Functional";
import ComponentClass from "./components/ComponentClass";
import JSX from "./JSX";
import Fragments from "./components/Fragments";
import State from "./components/State";
import Props from "./components/Props";

function App(){
  return(
    <>
    <h1>hello this is react</h1>
    <JSX/>
    <Functional/>
    <ComponentClass/>
    <Fragments/>    
    <State/>    
    <Props msg={"Good morning!"}/>    
    <Props msg={"Good Evening!"}/>    
    </>
  )
}
export default App;