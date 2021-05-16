import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { More } from '../../assets/icons';
import Navbar from '../navbar/navbar';
import SearchBar from '../searchbar/searchBar';
import ProductCard from '../shared/productCard/productCard';
import WideCard from '../shared/wideCard/wideCard';
import './homePage.css';

function HomePage() {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data.splice(0, 4));
                setNewData(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="home-wrapper">
            <Navbar home />
            <div className="title">
                Find Your collection for <br /> 2021
            </div>
            <SearchBar />
            <div className="sub-title">
                <div className="sub-title-text">
                    Popular Products
                </div>
                <div className="icon">
                    <More height='20' />
                </div>
            </div>
            <div className="popular-scroll">
                {data.map((item, i) => {
                    return (
                        <Link to='/product' key={i}>
                            <ProductCard 
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                image={item.image} />
                        </Link>
                    )
                })}
            </div>
            <div className="sub-title">
                <div className="sub-title-text">
                    New Arrival
                </div>
                <div className="icon">
                    <More height='20' />
                </div>
            </div>
            <div className="popular-scroll">
                {newData.map((item, i) => {
                    return (
                        <Link to='/product' key={i}>
                            <WideCard 
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                image={item.image} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
