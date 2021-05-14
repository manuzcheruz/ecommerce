import React from 'react';
import './detailPage.css';

function DetailPage() {
    return (
        <div className="detailpage-wrapper">
            <div className="text-content">
                <div className="sub-title">
                    ZARA
                </div>
                <div className="title">
                    <div className="text">
                        Floral green middel dress
                    </div>
                    <div className="price">
                        $499
                    </div>
                </div>
                <div className="ratings">

                </div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ultricies aliquam. In eleifend nunc vitae varius.
                </div>
                <div className="title-next">
                    Color
                </div>
                <div className="mini-wrapper">
                    <div className="item">
                    </div>
                    <div className="item">
                        
                    </div>
                    <div className="item">
                        
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="btn">
                    <button>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage;