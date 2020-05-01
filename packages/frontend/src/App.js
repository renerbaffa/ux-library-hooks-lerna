import React from 'react';
import { Button, Input } from 'components-lib'
import Counter from 'counter'

import './App.css';
console.log(Button, Input)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>frontend</div>
        <Button>Button</Button>
        <Input />
        <Counter />
      </header>
    </div>
  )
}

export default App;
