import 'macro-css';
import styles from '../../styles/details.module.scss';
import { useNavigate } from 'react-router-dom';

function ImageBlock() {
    const navigate = useNavigate();
    return (
        <div className='imageBlock d-flex flex-row justify-between align-center'>
            <div className='imageText d-flex flex-column'>
                <h1>Более 1172 профессионалов доверились нам, и сделали свои резюме!</h1>
                <p>Улучши качество своего резюме с помощью CVStud.io</p>
                <button className={styles.createButton} onClick={() => {navigate('/Resume/builder')}} >Создать</button>
            </div>
            <div className='rotatedPartition'></div>
            <img className='peopleImage' src='./interview.jpg' alt='' />
        </div>
    );
}

export default ImageBlock;
