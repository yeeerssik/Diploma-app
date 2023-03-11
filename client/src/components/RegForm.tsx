import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Spin, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../styles/loginPage.scss';

function RegistrationForm() {
    const navigate = useNavigate();

    const [ isVisible, setIsVisible ] = React.useState(false);

    const [ loading, setLoading ] = React.useState(false); 

    const onClickShow = () => {
        setIsVisible(!isVisible);
    }

    const onSubmit = async (values: any) => {
        setLoading(true);
        try {
            await axios.post('api/user/register', values);
            setLoading(false);
            message.success('Регистрация успешна');
            navigate('/');
        } catch (err) {
            setLoading(false);
            message.error('Регистрация не прошла');
        }
    };

    return (
        <div className='login d-flex flex-column align-center justify-center'>
            <div className='loginHeader'>
                <h1>Регистрация</h1>
                <p>Введите ваше имя пользователя и пароль для регистрации</p>
            </div>
            { loading && <Spin size='large' /> }
            <Form className='formBox' layout='vertical' onFinish={onSubmit}>
                <Form.Item name='username' label='Имя пользователя*'>
                    <Input placeholder='Имя пользователя' />
                </Form.Item>

                <Form.Item name='password' label='Пароль*'>
                    <Input.Password placeholder='Пароль' type='password' iconRender={(isVisible) => (isVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                </Form.Item>

                <Form.Item name='cpassword' label='Подтвердите пароль*'>
                    <Input.Password placeholder='Пароль' type='password' iconRender={(isVisible) => (isVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                </Form.Item>

                <div className='buttonsList d-flex flex-row justify-between align-center'>
                    <Link to='/login'>Уже есть аккаунт?</Link>
                    <Button type='primary' htmlType='submit'>
                        Регистрация
                    </Button>
                </div>
            </Form>
            {/* <form onSubmit={onSubmit}>
                <div className='loginForm'>
                    <div className='formSection'>
                        <div className='formGroup d-flex flex-column align-center justify-center'>
                            <div className='formElements d-flex flex-column align-left justify-center'>
                                <label className='inputLabel mb-5'>Электронный адрес*</label>
                                <input className='inputElement mb-15' type='text' name='email' />   
                            </div>
                            <div className='formElements d-flex flex-column align-left justify-center'>
                                <label className='inputLabel mb-5'>Пароль*</label>
                                <input className='inputElement' type={ isVisible ? 'text' : 'password'} name='password' />
                                <div className='passwordVisibility' onClick={ onClickShow  }>
                                    <span className='visibilityImg'>
                                        <img width={25} height={25} src={ isVisible ? './utils/hide.svg' : './utils/show.svg'} />
                                    </span>
                                </div>
                            </div>
                            <div className='formElements d-flex flex-column align-left justify-center mt-10'>
                                <label className='inputLabel mb-5'>Подтвердите пароль*</label>
                                <input className='inputElement' type={ isVisible ? 'text' : 'password'} name='password' />
                                <div className='passwordVisibility' onClick={ onClickShow  }>
                                    <span className='visibilityImg'>
                                        <img width={25} height={25} src={ isVisible ? './utils/hide.svg' : './utils/show.svg'} />
                                    </span>
                                </div>
                            </div>
                            <Link to='/Login' className='forgotPassword'>Уже есть аккаунт?</Link>
                        </div>
                    </div>
                </div>
                <div className='loginButton'>
                    <button className='submitButton p-10' type='submit'>Войти</button>
                </div>
            </form> */}
        </div>
    );
}

export default RegistrationForm;