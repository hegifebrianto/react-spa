import PropTypes from 'prop-types';
import React from 'react';

import useInput from '../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({ email, password });
  };
  return (
    <form className='input-login' onSubmit={onSubmitHandler}>
      <label htmlFor='email'  className='float-left'>Email :</label>
      <input type='email' placeholder="username" id='name' value={email} onChange={onEmailChangeHandler} />
      <label htmlFor='password' className='float-left'>Password :</label>
      <input type='password'  placeholder="password" id='password' value={password} onChange={onPasswordChangeHandler} />
      <button type='submit'>Login</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
