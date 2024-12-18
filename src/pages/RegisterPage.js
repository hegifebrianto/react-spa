import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

import RegisterInput from '../components/RegisterInput';
import LocaleContext from '../context/LocaleContext';
import { register } from '../utils/network-data';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);

    if (!error) {
      alert(locale === 'id' ? 'Akun berhasil dibuat.' : 'Account has been created successfully.');
      navigate('/');
    }
  };
  return (
    <section className='register-page'>
      <Helmet>
        <title>{locale === 'id' ? 'Halaman Registrasi' : 'Register Page'} - Notes APP</title>
      </Helmet>

      <div className="login-page">
        <div className="form">
          <h2 className='float-left'>
            {locale === 'id' ? 'Isi form untuk mendaftar akun.' : 'Fill the form to register account.'}
          </h2>
          <br></br>
          <br></br>
          <RegisterInput register={onRegisterHandler} />
          {locale === 'id' ? (
            <p className="message">
              Sudah punya akun? <Link to='/'>Login di sini</Link>
            </p>
          ) : (
            <p className="message"> 
              Already registered? <Link to='/'>Sign In</Link>
            </p>
          )}
        </div>

      </div>

    </section>
  );
};

export default RegisterPage;
