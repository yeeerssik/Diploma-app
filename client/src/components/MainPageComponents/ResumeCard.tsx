import 'macro-css';
import React from 'react';
import { Link } from 'react-router-dom';

type TProps = {
    imagePath: string;
    pageId: string;
    onMouseEnterImage: () => void;
    onMouseLeaveImage: () => void;
};

const TemplatesBlock: React.FC<TProps> = ({
    imagePath, pageId, onMouseEnterImage, onMouseLeaveImage 
}) => (
    <>
        <Link to={`/Resume/${pageId}`}>
            <div className='resumeCard'>
                <img width={250} height={350} src={imagePath}></img>
            </div >
        </Link>

    </>
)

export default TemplatesBlock;



