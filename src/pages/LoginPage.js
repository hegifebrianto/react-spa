import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import LoginInput from '../components/LoginInput';
import LocaleContext from '../context/LocaleContext';
import { login } from '../utils/network-data';

const LoginPage = ({ loginSuccess }) => {
    const { locale } = React.useContext(LocaleContext);
    const onLogin = async ({ email, password }) => {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    };
    return (
        // <section classNameName='login-page'>
        //   <Helmet>
        //     <title>{locale === 'id' ? 'Halaman Login' : 'Login Page'} - notes.self</title>
        //   </Helmet>
        //   <h2>
        //     {locale === 'id' ? 'Yuk, login untuk menggunakan aplikasi.' : 'Login to use app, please.'}
        //   </h2>
        //   <LoginInput login={onLogin} />
        //   {locale === 'id' ? (
        //     <p>
        //       Belum punya akun? <Link to='/register'>Daftar di sini</Link>
        //     </p>
        //   ) : (
        //     <p>
        //       Don&#39;t have an account? <Link to='/register'>Register here</Link>
        //     </p>
        //   )}
        // </section>
        <section className='login-page'>
            <div className="login-page">
                <div className="form">
                    <title>{locale === 'id' ? 'Halaman Login' : 'Login Page'} - notes.self</title>
                    <h2>
                        {locale === 'id' ? 'Login untuk menggunakan aplikasi.' : 'Login to use app, please.'}
                    </h2>
                    <form className="register-form">
                        {/* <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" /> */}

                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    {/* <form className="login-form"> */}
                    {/* <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" /> */}
                    {/* <button>login</button> */}
                    <LoginInput login={onLogin} />
                    {locale === 'id' ? (
                        <p className="message">
                            Belum punya akun? <Link to='/register'>Daftar di sini</Link>
                        </p>
                    ) : (
                        <p className="message">
                            Don&#39;t have an account? <Link to='/register'>Register here</Link>
                        </p>)}
                    {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
                    {/* </foclassNameNamerm> */}
                </div>
            </div>
        </section>
    );
};

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
