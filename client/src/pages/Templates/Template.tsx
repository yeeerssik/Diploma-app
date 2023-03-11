import React, { useRef } from 'react';
import { useReactToPrint,  } from 'react-to-print';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Template1 from './Template1';
import Template2 from './Template2';

function Template() {
    const componentRef = useRef<HTMLInputElement>(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current!,
    });
    const params = useParams();
    const navigate = useNavigate();
    const getTemplate=() => {
        switch (params.id) {
            case '1': {
                return <Template1 />
            }
            case '2': {
                return <Template2 />
            }
        }
    }
    return (
        <>
            <div className='d-flex justify-content-end mx-5 mt-30'>
                <Button className='back-btn' onClick={() => navigate('/Resume/builder')}>Назад</Button>
                <Button type='primary' className='mx-3' onClick={handlePrint}>Скачать PDF</Button>
            </div>
            <div ref={componentRef}>
                {getTemplate()}
            </div>
        </>
    )
}

export default Template;