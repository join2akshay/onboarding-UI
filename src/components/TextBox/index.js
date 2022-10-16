import React from 'react'

export default function TextBox(props) {
    const {type = 'text', className, label='', ...rest} = props
  return (
    <div className={`form-group ${className}`}>
    <label>{label}</label>
    <input type={type} {...rest}  className="form-control mt-2" />
</div>
  )
}
