import React from 'react';
import FormBuilder from './FormBuilder';

function App(props) {
  return (
    <form>
      <FormBuilder schema={props.schema} name="Form" />
    </form>
  )
}

export default App;