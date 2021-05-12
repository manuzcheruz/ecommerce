import React from 'react'
import SearchBar from '../searchbar/searchBar';
import ProductCard from '../shared/productCard/productCard';
import WideCard from '../shared/wideCard/wideCard';
import './homePage.css';

function HomePage() {
    return (
        <div className="home-wrapper">
            {/* navbar */}
            <div className="title">
                Find Your collection for <br /> 2021
            </div>
            <SearchBar />
            <div className="sub-title">
                <div className="sub-title-text">
                    Popular Products
                </div>
                <div className="icon">

                </div>
            </div>
            <ProductCard />
            <div className="sub-title">
                <div className="sub-title-text">
                    New Arrival
                </div>
                <div className="icon">

                </div>
            </div>
            <WideCard />
        </div>
    )
}

export default HomePage
