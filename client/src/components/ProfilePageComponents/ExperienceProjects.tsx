import React from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;
function ExperienceProjects() {
    return (
        <div>
            <h5><b>Опыт</b></h5>
            <hr />
            <Form.List name='experience'>
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'company']}
                                            rules={[{ required: true, message: 'Missing company name' }]}
                                        >
                                            <Input placeholder='Компания' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'years']}
                                            rules={[{ required: true, message: 'Missing years value' }]}
                                        >
                                            <Input placeholder='Количество лет' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'place']}
                                            rules={[{ required: true, message: 'Missing place name' }]}
                                        >
                                            <Input placeholder='Место' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'range']}
                                            rules={[{ required: true, message: 'Missing range value' }]}
                                        >
                                            <Input placeholder='Годы работы' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{fontSize:25, color:'tomato'}} onClick={() => remove(name)} />
                                    </div>
                                    
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type='dashed' onClick={() => add()} block icon={<PlusOutlined />}>
                                Добавить опыт работы
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5><b>Проекты</b></h5>
            <hr />                    
            <Form.List name='projects'>
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'title']}
                                            rules={[{ required: true, message: 'Missing title name' }]}
                                        >
                                            <Input placeholder='Наименование' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'description']}
                                            rules={[{ required: true, message: 'Missing description' }]}
                                        >
                                            <TextArea placeholder='Описание' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'range']}
                                            rules={[{ required: true, message: 'Missing range values' }]}
                                        >
                                            <Input placeholder='Годы работы' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{fontSize:25, color:'tomato'}} onClick={() => remove(name)} />
                                    </div>
                                    
                                </>
                            ))}
                        </div>
                        <Form.Item>
                            <Button type='dashed' onClick={() => add()} block icon={<PlusOutlined />}>
                                Добавить проект
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default ExperienceProjects;