import React from 'react';
import HeaderCut from '../components/HeaderCut';
import RegForm from '../components/RegForm';
import Footer from '../components/Footer'
import 'macro-css';

function RegisterPage() {
    return (
        <div className='loginWrapper clear'>
            <HeaderCut />
            <RegForm />
            {/* <Footer /> */}
        </div>

    )
}

export default RegisterPage;