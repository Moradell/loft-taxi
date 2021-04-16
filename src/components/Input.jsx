import React from 'react';

export const Input = ({ name, type, label, placeholder, value }) => {
  return (
    <>
      <div className="input">
        <label htmlFor={name} className='input__label'>{label}</label>
        <input id={name} type={type} name={name} placeholder={placeholder} value={value} className='input__field' />
      </div>
    </>
  )
}