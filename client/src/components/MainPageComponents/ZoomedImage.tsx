import React from 'react';
import styles from '../../styles/zooming.module.scss';

type TProps = {
    imagePath: string;
    onClose: () => void;
};

const ZoomedImage: React.FC<TProps> = ({ 
    imagePath, onClose
}) => (
    <>
        <div className={ styles.container } onClick={ onClose }>
            {/* <img className={ styles.closeButton } onClick={ onClose } src="./utils/close.png" height={30} width={30} alt="" /> */} 
            <img className={ styles.zoomedImage } src={ imagePath } alt="" />
        </div>
    </>
);

export default ZoomedImage;