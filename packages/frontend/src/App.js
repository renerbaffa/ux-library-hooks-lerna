import React from 'react'
import { Button, Input } from 'components-lib'
import Counter from 'counter'
import { withProviders } from 'providers/withProviders'

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

export default withProviders(App)
