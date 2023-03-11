import React, { useEffect, useRef, useState } from 'react';

interface IProps {
    open?: boolean;
    header: string | React.ReactNode;
    children: string;

}

const Collapsible: React.FC<IProps> = ({
    open,
    header,
    children
}) => {
    const [isOpen, setIsOpen] = useState(!open);
    const [height, setHeight] = useState<number | undefined>(
        open ? undefined : 0
    );
    const ref = useRef<HTMLDivElement>(null);
    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };
    useEffect(() => {
        if (!height || !isOpen || !ref.current) return undefined;
        // @ts-ignore
        const resizeObserver = new ResizeObserver((el) => {
            setHeight(el[0].contentRect.height);
        });
        resizeObserver.observe(ref.current);
        return () => {
            resizeObserver.disconnect();
        };
    }, [height, isOpen]);
    useEffect(() => {
        if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
        else setHeight(0);
    }, [isOpen]);
    return (
        <div className='block d-flex flex-column'>
            <div className='header d-flex flex-row align-center' onClick={handleFilterOpening}>
                <img src='./utils/extend.png' className='extendButton' alt='' style={isOpen ? { transform: 'rotate(-90deg)' } : {}} width={15} height={15} />
                <h1>{header}</h1>
            </div>
            {
                isOpen &&
                <div className='body'>
                    <p>{children}</p>
                </div>
            }
        </div>
    );
};

export default Collapsible;