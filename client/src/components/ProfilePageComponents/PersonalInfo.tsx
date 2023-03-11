import React from 'react';
import { Form, Input } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';

const { TextArea } = Input;
function PersonalInfo() {
    return (
        <div>
            <div className='d-flex flex-row flex-wrap space between'>
                <div className='mr-20'>
                    <Form.Item 
                        name='firstName' 
                        label='Имя' 
                        rules={[{required:true}]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div className='mr-20'>
                    <Form.Item 
                        name='lastName' 
                        label='Фамилия' 
                        rules={[{required:true}]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div className='mr-20'>
                    <Form.Item 
                        name='email' 
                        label='Электронная почта' 
                        rules={[{required:true}]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div className='mr-20'>
                    <Form.Item 
                        name='mobileNumber' 
                        label='Номер мобильного телефона' 
                        rules={[{required:true}]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div className='mr-20'>
                    <Form.Item 
                        name='portfolio' 
                        label='Портфолио' 
                        rules={[{required:true}]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div className='mr-20'>
                    <Form.Item 
                        name='carrierObjective' 
                        label='Карьерные цели' 
                        rules={[{required:true}]}
                    >
                        <TextArea />
                    </Form.Item>
                </div>
                <div className='mr-20'>
                    <Form.Item 
                        name='address' 
                        label='Адрес' 
                        rules={[{required:true}]}
                    >
                        <TextArea />
                    </Form.Item>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo;