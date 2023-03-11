import React from 'react';
import HeaderCut from '../components/HeaderCut';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer'
import 'macro-css';

function LoginPage() {
    return (
        <div className='loginWrapper clear'>
            <HeaderCut />
            <LoginForm />
            {/* <Footer /> */}
        </div>

    )
}

export default LoginPage;