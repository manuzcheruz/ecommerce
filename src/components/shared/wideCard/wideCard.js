import React from 'react'
import './wideCard.css';

function WideCard() {
    return (
        <div className="card-wrapper-wide">
            <div className="body">
                <div className="card-image">
                    
                </div>
                <div className="content">
                    <div className="card-title">
                        {/* {props.name} */}
                        High neck middle dress
                    </div>
                    <div className="card-subtitle">
                        {/* {props.category} */}
                        VEROMODA
                    </div>
                    <div className="price">
                        {/* $ {props.price} */}
                        $ 299.99
                    </div>
                </div>
                <div className="btn-add">
                        {/* $ {props.price} */}
                        add
                    </div>
            </div>
        </div>
    )
}

export default WideCard
