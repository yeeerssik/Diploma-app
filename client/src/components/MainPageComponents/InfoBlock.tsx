import 'macro-css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/details.module.scss';
function InfoBlock() {
    const navigate = useNavigate();
    return (
        <div className='infoBlock d-flex flex-column align-center'>
            <div className='infoText'>
                <h1>Создай свое первое резюме с нашим сервисом</h1>
                <p>Заполни необходимые поля, выбери подходящий тебе шаблон, и скачай готовое резюме &#128293;.</p>
            </div>
            <button className={styles.createButton} onClick={() => {navigate('/Resume/builder')}}>Создать резюме</button>
        </div>
    );
}

export default InfoBlock;
