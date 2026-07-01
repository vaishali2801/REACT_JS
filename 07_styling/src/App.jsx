import React from 'react'
import Inline from './styling/inline'
import Internal from './styling/Internal'
import External from './styling/External'
import Module from './styling/module';
import Bootstrap from './styling/Bootstrap';

const App = () => {
  return (
    <>
      {/* <h1>App</h1> */}

      {/* inline  */}
      <Inline/>

      {/* internal  */}
      <Internal/>

      {/* External  */}
      <External/>

      {/* module  */}
      <Module/>

      {/* Bootstrap  */}
      <Bootstrap/>

    </>
  )
}

export default App
