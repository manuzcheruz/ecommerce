import React from 'react';
import './productCard.css';
import { Basket, Heart } from '../../../assets/icons';

function ProductCard(props) {
    return (
        <div>
            <div className="card-wrapper" style={{height: `${props.index === 1 ? '300px' : props.index === 2 ? '260px' : props.height ? props.height : '350px'}`, width: `${props.height && '150px'}`, borderRadius: `${props.height && '20px'}`}}>
                <div className="body">
                    <div className="card-image" style={{height: `${props.index === 1 ? '200px' : props.index === 2 ? '160px' : props.imageHeight ? props.imageHeight : '250px'}`, borderRadius: `${props.height && '20px'}`}}>
                        <div className="heart"><Heart height="25" color="white" /></div>
                        <div className="heart"><Basket height="25" color="white" /></div>
                        <img src={props.image} alt='' style={{marginTop: '-80px', height: `${props.index === 1 ? '170px' : props.index === 2 ? '140px' : props.height ? '100px' : '230px'}`}} width='auto' />
                    </div>
                    <div className="card-title" style={{fontSize: `${props.imageHeight && '15px'}`}}>
                        {props.title.slice(0, 20)} ...
                    </div>
                    <div className="card-subtitle" style={{fontSize: `${props.imageHeight && '13px'}`}}>
                        {props.category.includes('women') ? props.category.toUpperCase().slice(0,7) : props.category.toUpperCase()}
                    </div>
                    <div className="price" style={{fontSize: `${props.imageHeight && '15px'}`}}>
                        $ {props.price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
