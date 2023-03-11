import React from 'react';
import { Button, Form, Tabs, Spin, message } from 'antd';
import PersonalInfo from '../components/ProfilePageComponents/PersonalInfo';
import SkillsEducation from '../components/ProfilePageComponents/SkillsEducation';
import ExperienceProjects from '../components/ProfilePageComponents/ExperienceProjects';
import axios from 'axios';
import '../styles/profile.scss';

const { TabPane } = Tabs;
function Profile() {
    const [loading, setLoading] = React.useState(false);
    const user = JSON.parse(localStorage.getItem('cv-studio-db')!);
    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const result = await axios.post('api/user/update', {
                ...values, _id: user._id 
            });
            localStorage.setItem('cv-studio-db', JSON.stringify(result.data));
            setLoading(false);
            message.success('Profile updated successfully');
        } catch (err) {
            setLoading(false);
            message.error('Profile update failed');
        }
    }

    return (
        <div className='formBox'>
            {loading && <Spin size='large'/>}
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
                    <Button type='primary' htmlType='submit'>Обновить</Button>
                </Form>
            </div>
        </div >
    )
};

export default Profile;