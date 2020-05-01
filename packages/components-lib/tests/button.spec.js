import React from 'react'
import { Button } from '../src/button'
import { render } from '@testing-library/react'

it('should work', () => {
  const { debug } = render(<Button>Click me!</Button>)
  debug()
})
