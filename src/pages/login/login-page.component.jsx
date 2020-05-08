import React from 'react';
import './login-page.styles.scss';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const LoginPage = () => {
    return (
        <div className='login-page'>
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default LoginPage;