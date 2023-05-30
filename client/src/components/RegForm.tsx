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
                <Form.Item name='username' label='Логин*'>
                    <Input placeholder='Логин' />
                </Form.Item>

                <Form.Item name='firstName' label='Имя*'>
                    <Input placeholder='Имя' />
                </Form.Item>

                <Form.Item name='lastName' label='Фамилия*'>
                    <Input placeholder='Фамилия' />
                </Form.Item>

                <Form.Item name='email' label='Электронный адрес*'>
                    <Input placeholder='Электронный адрес' />
                </Form.Item>

                <Form.Item name='password' label='Пароль*'>
                    <Input.Password placeholder='Пароль' type='password' iconRender={(isVisible) => (isVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                </Form.Item>

                <Form.Item name='cpassword' label='Подтвердите пароль*'>
                    <Input.Password placeholder='Пароль' type='password' iconRender={(isVisible) => (isVisible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                </Form.Item>

                <div className='buttonsList d-flex flex-row justify-between align-center'>
                    <Link to='/Login'>Уже есть аккаунт?</Link>
                    <Button type='primary' htmlType='submit'>
                        Регистрация
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default RegistrationForm;