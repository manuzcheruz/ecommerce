import React from 'react';
import './productCard.css';

function ProductCard(props) {
    return (
        <div className="card-wrapper" style={{height: `${props.height && props.height}`, width: `${props.height && '150px'}`}}>
            <div className="body">
                <div className="card-image" style={{height: `${props.imageHeight && props.imageHeight}`}}>
                    
                </div>
                <div className="card-title" style={{fontSize: `${props.imageHeight && '15px'}`}}>
                    {/* {props.name} */}
                    High neck middle dress
                </div>
                <div className="card-subtitle" style={{fontSize: `${props.imageHeight && '13px'}`}}>
                    {/* {props.category} */}
                    VEROMODA
                </div>
                <div className="price" style={{fontSize: `${props.imageHeight && '15px'}`}}>
                    {/* $ {props.price} */}
                    $ 299.99
                </div>
            </div>
        </div>
    )
}

export default ProductCard
