import React from 'react';
import './productCard.css';
import { Basket, Heart } from '../../../assets/icons';

function ProductCard(props) {
    return (
        <div>
            <div className="card-wrapper" style={{height: `${props.height && props.height}`, width: `${props.height && '150px'}`, borderRadius: `${props.height && '20px'}`}}>
                <div className="body">
                    <div className="card-image" style={{height: `${props.imageHeight && props.imageHeight}`, borderRadius: `${props.height && '20px'}`}}>
                        <div className="heart"><Heart height="25" color="white" /></div>
                        <div className="heart"><Basket height="25" color="white" /></div>
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
        </div>
    )
}

export default ProductCard
