import React, { useState } from 'react'

export default function Input(props) {
  const [ value, setValue ] = useState('')

  return (
    <input
      value={value}
      onChange={event => setValue(event.target.value)}
      {...props}
    />
  )
}
