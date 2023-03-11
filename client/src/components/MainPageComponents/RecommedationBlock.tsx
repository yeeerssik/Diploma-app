import 'macro-css';
import React from 'react';

function RecommendationBlock() {
    const items: string[] = [ 
        './companies/Kaspi.kz.png', './companies/Kazatomprom.png', './companies/yandex.png', './companies/toyota.png', 
        './companies/Rocket.png', './companies/Kazmunaigaz.png', './companies/kpmg.jpg', './companies/Kolesa.jpg',
        './companies/airaastana.png', './companies/chocofood.png', './companies/magnum.png', './companies/jusan.png',
        './companies/danone.jpg', './companies/ibm.jpg'
     ]

    return (
        <div className='recommendationBlock d-flex flex-column align-center justify-center'>
            <h2 className='header'>Наших пользователей нанимают ведущие компании</h2>
            <div className='slider'>
                <div className='slide-track'>
                    { items.map((item) => (
                        <div className='slide'>
                            <img src={ item } height={100} width={100} alt='' />
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
}

export default RecommendationBlock;