import React from 'react';
import '../../styles/templates.css';

function Template1() {
    const user = JSON.parse(localStorage.getItem('cv-studio-db')!) ? JSON.parse(localStorage.getItem('cv-studio-db')!) : JSON.parse(localStorage.getItem('test')!);

    return (
        <div className='template1-parent'>
            <div className='top d-flex justify-content-between '>
                <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
                <div>
                    <p>{user.email ? user.email : ""}</p>
                    <p>{user.address}</p>
                    <p>{user.mobileNumber}</p>
                </div>
            </div>

            <div className='divider mt-3'></div>

            <div className='objective mt-3'>
                <h3>О себе</h3>
                <hr />
                <p>{user.carrierObjective}</p>
            </div>

            <div className='divider mt-3'></div>

            <div className='education mt-3'>
                <h3>Образование</h3>
                <hr />
                {user.education ? user.education!.map((education: any) => {
                    return <div className='d-flex align-items-center'>
                        <h6 style={{width:100}}>
                            <b>{education.range} :</b>
                        </h6>
                        <p>
                            <b>{education.qualification}</b> с <b>{education.percentage}%</b> в {education.institution}
                        </p>
                    </div>
                }) : ""}
            </div>

            <div className='divider mt-3'></div>

            <div className='experience mt-3'>
                <h3>Опыт работы</h3>
                <hr />
                {user.experience ? user.experience!.map((exp: any) => {
                    return <div className='d-flex flex-column'>
                        <h6>
                            <b>{exp.range} :</b>
                        </h6>
                        <p>
                            <b>{exp.company}</b> в <b>{exp.place}</b>
                        </p>
                    </div>
                }) : ""}
            </div>

            <div className='divider mt-3'></div>

            <div className='projects mt-3'>
                <h3>Проекты</h3>
                <hr />
                {user.projects ? user.projects.map((project: any) => {
                    return <div className='d-flex flex-column'>
                        <h6>
                            <b>{project.title} [{project.range}]</b>
                        </h6>
                        <p>
                            {project.description}
                        </p>
                    </div>
                }) : ""}
            </div> 

            <div className='divider mt-3'></div>

            <div className='skills mt-3'>
                <h3>Навыки</h3>
                <hr />
                {user.skills ? user.skills.map((skill: any) => {
                    return <div className='d-flex flex-column'>{skill.technology}</div>
                }) : ""}
            </div>
        </div>
    )
}

export default Template1;