import React from 'react'

export default function Button(props) {
    const {className='',label='',...rest}=props
  return (
    <button type="submit" {...rest} className={`btn btn-primary w-100 workspace-btn ${className}`}>{label}</button>

  )
}
