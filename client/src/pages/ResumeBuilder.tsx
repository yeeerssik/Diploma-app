import React from 'react';
import axios from 'axios';
import { Button, Form, Tabs, Spin, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import Header from '../components/HeaderCut';
import styles from '../../styles/details.module.scss';
import ZoomedImage from '../components/MainPageComponents/ZoomedImage';
import ResumeCard from '../components/MainPageComponents/ResumeCard';
import PersonalInfo from '../components/ProfilePageComponents/PersonalInfo';
import SkillsEducation from '../components/ProfilePageComponents/SkillsEducation';
import ExperienceProjects from '../components/ProfilePageComponents/ExperienceProjects';
import 'macro-css';
// import TemplatesBlock from '../components/MainPageComponents/TemplatesBlock';

const { TabPane } = Tabs;
function ResumeBuilder() {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    const user = JSON.parse(localStorage.getItem('test')!);
    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            localStorage.setItem('test', JSON.stringify(values));
            setLoading(false);
            message.success('Profile updated successfully');
        } catch (err) {
            setLoading(false);
            message.error('Profile update failed');
        }
    }

    const ZoomImage = {
        isZoomed: false,
        zoomedImgPath: ''
    }

    const [isLoggedIn, setLoggedIn] = React.useState(false)

    React.useEffect(() => {
        if (localStorage.getItem('cv-studio-db')) {
            setLoggedIn(true);
        }
    });

    const [imageZoomed, setImageZoomed] = React.useState(ZoomImage);

    const items: string[] = ['../resume-templates/template1.png', '../resume-templates/template2.png']


    return (
        <div>
            <Header />
            <div className='headerResume mt-50 ml-auto mr-auto' style={{width: '1050px'}}>
                <h3>
                    {isLoggedIn ? <b>Выберите подходящий вам шаблон и создайте свое резюме &#128293;</b> : <b>Заполните данные для составления резюме и выберите подходящий шаблон &#128293;</b>}
                </h3>
            </div>
            <div className='content'>
                {!isLoggedIn && <div className='formBox mb-50'>
                    {loading && <Spin size='large' />}
                    <div className='updateProfile'>
                        <h4><b>Обновление профиля</b></h4>
                        <hr />
                        <Form layout='vertical' onFinish={onFinish} initialValues={user}>
                            <Tabs defaultActiveKey='1'>
                                <TabPane tab='Личная информация' key='1'>
                                    <PersonalInfo />
                                </TabPane>
                                <TabPane tab='Образование и навыки' key='2'>
                                    <SkillsEducation />
                                </TabPane>
                                <TabPane tab='Опыт и проекты' key='3'>
                                    <ExperienceProjects />
                                </TabPane>
                            </Tabs>
                            <Button type='primary' htmlType='submit'>Сохранить</Button>
                        </Form>
                    </div>
                </div >
                }


                <div className='templatesBlock builderCards d-flex flex-column justify-center align-center'>
                    <h4><b>Выбор шаблона</b></h4>
                    <hr style={{width:"976px"}}/>
                    <div className='templateCards d-flex flex-row justify-center'>
                        {
                            items.map((item, index) => (
                                <ResumeCard
                                    imagePath={item}
                                    pageId={(index + 1).toString()}
                                    onMouseEnterImage={() => { setImageZoomed({ isZoomed: true, zoomedImgPath: item }) }}
                                    onMouseLeaveImage={() => { setImageZoomed({ isZoomed: false, zoomedImgPath: item }) }}
                                />
                            ))

                        }
                        {
                            imageZoomed.isZoomed && <ZoomedImage imagePath={imageZoomed.zoomedImgPath} onClose={() => { setImageZoomed({ isZoomed: false, zoomedImgPath: '' }) }} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeBuilder;