import React from 'react';
import './productCard.css';

function ProductCard(props) {
    return (
        <div className="card-wrapper">
            <div className="body">
                <div className="card-image">
                    
                </div>
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
        </div>
    )
}

export default ProductCard
