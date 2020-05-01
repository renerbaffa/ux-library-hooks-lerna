import React from 'react'
import { Input } from '../src/input'
import { render } from '@testing-library/react'

it('should work', () => {
  const { debug } = render(<Input type="text" />)
  debug()
})
