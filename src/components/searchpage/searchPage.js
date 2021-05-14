import React from 'react';
import Badge from '../shared/badge/badge';
import ProductCard from '../shared/productCard/productCard';
import './searchPage.css';

function SearchPage() {
    return (
        <div className="page-wrapper">
            <div className="title">
                <div className="titleText">
                    Oversized <br /> and Loosefit blazer
                </div>
                <div className="results">
                    449 results
                </div>
            </div>
            <div className="badges">
                <Badge />
                <Badge />
            </div>
            <div className="cards-wrapper">
                <div className="item1">
                    <ProductCard height='250px' imageHeight='150px' />
                </div>
                <div className="item2">
                    <ProductCard height='250px' imageHeight='150px' />
                </div>
                <div className="item3">
                    <ProductCard height='250px' imageHeight='150px' />
                </div>
                <div className="item4">
                    <ProductCard height='250px' imageHeight='150px' />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;
