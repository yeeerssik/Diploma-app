import 'macro-css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/details.module.scss';
import ZoomedImage from './ZoomedImage';
import ResumeCard from './ResumeCard';

function TemplatesBlock() {
    const ZoomImage = {
        isZoomed: false,
        zoomedImgPath: ''
    }

    const navigate = useNavigate();

    const [imageZoomed, setImageZoomed] = React.useState(ZoomImage);

    const items: string[] = ['./resume-templates/template1.png', './resume-templates/template2.png', './resume-templates/template1.png']

    return (
        <div className='templatesBlock d-flex flex-row justify-center align-center mt-30'>
            <div className='templateText d-flex flex-column'>
                <h1>Большой выбор шаблонов резюме подходящих под разные отрасли</h1>
                <p className='mb-50'>Выбери подходящий шаблон для своей отрасли и составь рабочее резюме 🚀</p>
                <button className={styles.createButton} onClick={() => {navigate('/Resume/builder')}}>Создать</button>
            </div>
            <div className='templateCards d-flex flex-row justify-between'>
                {
                    items.map((item, index) => (
                        <ResumeCard 
                            imagePath={ item } 
                            pageId={(index + 1).toString()} 
                            onMouseEnterImage={() => { setImageZoomed( { isZoomed: true, zoomedImgPath: item } ) }} 
                            onMouseLeaveImage={() => { setImageZoomed( { isZoomed: false, zoomedImgPath: item } ) }}
                        />          
                    ))  
                }
                { 
                    imageZoomed.isZoomed && <ZoomedImage imagePath={ imageZoomed.zoomedImgPath } onClose={() => { setImageZoomed( { isZoomed: false, zoomedImgPath:  '' } ) }} /> 
                }
            </div>
            
        </div>
    );
}

export default TemplatesBlock;
