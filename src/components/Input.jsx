import React from 'react';

export const Input = ({ name, type, label, placeholder }) => {
  return (
    <>
      <div className="input">
        <label htmlFor={name} className='input__label'>{label}</label>
        <input id={name} type={type} name={name} placeholder={placeholder} className='input__field' />
      </div>
    </>
  )
}