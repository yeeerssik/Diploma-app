import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Spin, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../styles/loginPage.scss';

function LoginForm() {
    const navigate = useNavigate();

    const [ isVisible, setIsVisible ] = React.useState(false);

    const [ loading, setLoading ] = React.useState(false); 

    const onClickShow = () => {
        setIsVisible(!isVisible);
    }

    const onSubmit = async (values: any) => {
        setLoading(true);
        try {
            const user = await axios.post('api/user/login', values);
            message.success('Вход успешен');
            localStorage.setItem('cv-studio-db', JSON.stringify(user.data));
            setLoading(false);
            navigate('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            message.error('Не удалось войти');
        }
    };

    React.useEffect(() => {
        if (localStorage.getItem('cv-studio-db')) {
            navigate('/');
        }
    });

    return (
        <div className='login d-flex flex-column align-center justify-center'>
            <div className='loginHeader'>
                <h1>Войти</h1>
                <p>Введите ваше имя пользователя и пароль для входа</p>
            </div>

            { loading && <Spin size='large' /> }
            <Form className='formBox' layout='vertical' onFinish={onSubmit}>
                <Form.Item name='username' label='Имя пользователя*'>
                    <Input placeholder='Имя пользователя' />
                </Form.Item>

                <Form.Item name='password' label='Пароль*'>
                    <Input.Password placeholder='Пароль' type='password' iconRender={(isVisible) => (isVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                </Form.Item>

                <div className='buttonsList d-flex flex-row justify-between align-center'>
                    <Link to='/Register'>Еще не зарегистрированы?</Link>
                    <Button type='primary' htmlType='submit'>
                        Войти
                    </Button>
                </div>
            </Form>
            {/* <form>
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
                            <Link to='/Register' className='forgotPassword'>Еще не зарегистрированы?</Link>
                        </div>
                    </div>
                </div>
                <div className='loginButton'>
                    <button className='submitButton p-10'>Войти</button>
                </div>
            </form> */}
        </div>

    );
}

export default LoginForm;