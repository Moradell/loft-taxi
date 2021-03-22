import React from 'react';

export const Input = ({ name, type, label, placeholder }) => {
  return (
    <>
      <label htmlFor={name} className='login__label'>{label}</label>
      <input id={name} type={type} name={name} placeholder={placeholder} className='login__input' />
    </>
  )
}