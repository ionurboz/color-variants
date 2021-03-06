import React from 'react'
import TextInput from './TextInput'
import RangeInput from './RangeInput'

function Input({ type, ...props }) {
  switch (type) {
    case 'range':
      return <RangeInput {...props} />

    default:
      return <TextInput {...props} />
  }
}

export default Input