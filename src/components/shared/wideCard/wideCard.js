import React from 'react'
import { Add } from '../../../assets/icons';
import './wideCard.css';

function WideCard(props) {
    return (
        <div>
            <div className="card-wrapper-wide">
                <div className="body">
                    <div className="card-image">
                        <img src={props.image} alt='' height='100px' style={{marginTop: '5px'}} width='80px' />
                    </div>
                    <div className="content">
                        <div className="card-title">
                            {props.title.slice(0, 36)}
                        </div>
                        <div className="card-subtitle">
                            {props.category.toUpperCase()}
                        </div>
                        <div className="price">
                            $ {props.price}
                        </div>
                        <div className="extra">
                            Save 10% on this order
                        </div>
                    </div>
                    <div className="btn-add">
                        <Add height="30" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WideCard
