import React from 'react'
import Text from './Text'

function Code(props) {
  return (
    <Text
      is="code"
      fontFamily="monospace"
      fontSize={2}
      {...props}
    />
  )
}

export default Code
