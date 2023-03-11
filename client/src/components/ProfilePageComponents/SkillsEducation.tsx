import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


function SkillsEducation() {
    return (
        <div>
            <h5><b>Образование</b></h5>
            <hr />
            <Form.List name='education'>
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'qualification']}
                                            rules={[{ required: true, message: 'Missing qualification name' }]}
                                        >
                                            <Input placeholder='Специализация' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'percentage']}
                                            rules={[{ required: true, message: 'Missing percentage name' }]}
                                        >
                                            <Input placeholder='Процент успеваемости' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'institution']}
                                            rules={[{ required: true, message: 'Missing institution name' }]}
                                        >
                                            <Input placeholder='Учебное заведение' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'range']}
                                            rules={[{ required: true, message: 'Missing range name' }]}
                                        >
                                            <Input placeholder='Годы учебы' />
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
                                Добавить образование
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <h5><b>Навыки</b></h5>
            <hr />                    
            <Form.List name='skills'>
                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'technology']}
                                            rules={[{ required: true, message: 'Missing technology name' }]}
                                        >
                                            <Input placeholder='Технология' />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'rating']}
                                            rules={[{ required: true, message: 'Missing rating name' }]}
                                        >
                                            <Input placeholder='Уровень' />
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
                                Добавить навык
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </div>
    )
}

export default SkillsEducation;