import React from 'react';
import './badge.css';

function Badge({home, one}) {
    return (
        <div className="badge-wrapper" style={{height: `${home && '40px'}`, marginLeft: `${home && '-20px'}`, width: `${home && '150px'}`}}>
            <div className="image-b" style={{height: `${home && '40px'}`, width: `${home && '40px'}`}}>

            </div>
            <div className="text" style={{marginTop: `${home && '-8px'}`, marginLeft: `${home && '-5px'}`}}>
                {home ? 'Alison Parker' : one ? 'Oversized' : 'Loosefit'}
            </div>
        </div>
    )
}

export default Badge;
