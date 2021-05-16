import React, {useEffect, useState} from 'react';
import Aux from '../../hoc/aux/Aux';
import Navbar from '../navbar/navbar';
import Badge from '../shared/badge/badge';
import ProductCard from '../shared/productCard/productCard';
import './searchPage.css';

function SearchPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                fetch(`https://fakestoreapi.com/products/category/men's clothing`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data2 => {
                        setData(data2.concat(data).slice(0, 6));
                    });
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <Aux>
            <Navbar search />
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
                    <Badge one />
                    <Badge />
                </div>
                <div className="cards-wrapper">
                    {data.map((item, i) => {
                        return (
                            <div className={'item' + i} key={i}>
                                <ProductCard 
                                    height='220px' 
                                    index={i}
                                    imageHeight='120px'
                                    title={item.title}
                                    image={item.image}
                                    category={item.category}
                                    price={item.price} />
                            </div>
                        )
                    })}
                    {/* <div className="item2">
                        <ProductCard height='300px' imageHeight='200px' />
                    </div>
                    <div className="item3">
                        <ProductCard height='260px' imageHeight='160px' />
                    </div>
                    <div className="item4">
                        <ProductCard height='220px' imageHeight='120px' />
                    </div>
                    <div className="item5">
                        <ProductCard height='220px' imageHeight='120px' />
                    </div>
                    <div className="item6">
                        <ProductCard height='220px' imageHeight='120px' />
                    </div> */}
                </div>
            </div>
        </Aux>
    )
}

export default SearchPage;
