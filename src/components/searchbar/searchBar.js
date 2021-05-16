import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../../assets/icons';
import Settings from '../../assets/icons/settings';
import './searchBar.css';

function SearchBar() {
    return (
        <div className="search-wrapper">
            <span style={{paddingTop: '15px'}}>
                <Link to='/search'>
                    <Search height='20px' />
                </Link>
            </span>
            <input placeholder="What are you looking for?" />
            <span style={{paddingTop: '15px'}}>
                <Settings height='20px' />
            </span>
        </div>
    )
}

export default SearchBar;
