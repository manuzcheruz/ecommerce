import React, {useState, useEffect} from 'react';
import './detailPage.css';
import { Basket, Star } from '../../assets/icons';
import Navbar from '../navbar/navbar';
import Aux from '../../hoc/aux/Aux';

function DetailPage() {
    const [newData, setNewData] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setNewData(data.slice(4, 5));
                setImages(data);
            })
            .catch(err => {
                console.log(err);
            })
        }, [])
        // let imageNew;
        // if (newData){
        //     console.log(newData[0].image)
        // }
        return (
        <Aux>
            {newData.map((item, key) => {
                return (
                <div className="detailpage-wrapper" style={{backgroundImage: `url(${item.image})`}}>
                    <div className="top-nav">
                        <Navbar />
                    </div>
                    <div className="text-content">
                        <div className="sub-title">
                            {item.category}
                        </div>
                        <div className="title">
                            <div className="text">
                                {item.title}
                            </div>
                            <div className="price">
                                ${item.price}
                            </div>
                        </div>
                        <div className="ratings">
                            <span><Star height="20" color="#F49A16" /></span>
                            <span><Star height="20" color="#F49A16" /></span>
                            <span><Star height="20" color="#F49A16" /></span>
                            <span><Star height="20" color="#F49A16" /></span>
                            <span className="value">4.0 (216 Reviews)</span>
                        </div>
                        <div className="text">
                            {item.description}
                        </div>
                        <div className="title-next">
                            Color
                        </div>
                        <div className="mini-wrapper">
                            {images.slice(0,3).map((item, i) => {
                                return (
                                    <div className="item" key={i}>
                                        <img src={item.image} alt='' height='80px' style={{marginLeft: '10px'}} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="btn">
                            <button>
                                <span><Basket height="20" /></span>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                )
            })}
        </Aux>
    )
}

export default DetailPage;