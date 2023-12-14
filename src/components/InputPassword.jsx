import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';

const InputPassword = () => {
  const [type, setType] = useState('password');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    setIsPasswordVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    // <div className='password'>
      <form className='password'>
        <fieldset>
          <label>Password</label>
          <div className='input'>
            <input type={type} className='inp'/>
            {isPasswordVisible ? (
              <FaEyeSlash onClick={togglePasswordVisibility} />
            ) : (
              <FaEye onClick={togglePasswordVisibility} />
            )}
          </div>
        </fieldset>
      </form>
    );
};


export default InputPassword;
