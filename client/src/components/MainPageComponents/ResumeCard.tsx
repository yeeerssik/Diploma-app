import 'macro-css';
import React from 'react';

type TProps = {
    imagePath: string;
    pageId: string;
    onMouseEnterImage: () => void;
    onMouseLeaveImage: () => void;
};

const TemplatesBlock: React.FC<TProps> = ({
    imagePath, pageId, onMouseEnterImage, onMouseLeaveImage
}) => (
    <div className='resumeCard' onClick={onMouseEnterImage}>
        <img width={250} height={350} src={imagePath}></img>
    </div >
);

export default TemplatesBlock;



