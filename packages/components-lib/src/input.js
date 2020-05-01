import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 300;
  padding: 10px 40px 10px 10px;
  width: 150px;
`

// TODO remove the wrapping div
function Input(props) {
  return (
    <div>
      <StyledInput {...props} />
    </div>
  )
}

export default Input
