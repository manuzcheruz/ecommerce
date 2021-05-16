import React from 'react';
import { ChevronLeft, Search, Bell, Basket, Heart } from '../../assets/icons';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/aux/Aux';

import './navbar.css';
import Badge from '../shared/badge/badge';

function Navbar({home, search}) {
    return (
        <div className="navbar">
            <div className="left" style={{marginLeft: `${home && '20px'}`}}>
                {home ? 
                <div className="image">
                        <span>
                            <Badge home />
                        </span>
                </div>
                :
                <Link to='/'>
                    <div className="image" style={{backgroundColor: 'transparent'}}>
                        <span style={{marginLeft: '7px'}}>
                            <ChevronLeft color='black' height='30' />
                        </span>
                    </div>
                </Link>
                }
            </div>
            <div className="right">
                {home ? 
                <Aux>
                    <span className='bell'>
                        <Bell height={25} />
                    </span>
                    <span className='search'>
                        <Basket height={25} />
                    </span>
                </Aux>
                :
                search ?
                <Aux>
                    <span className='bell'>
                        <Search height={25} />
                    </span>
                    <span className='search'>
                        <Basket height={25} />
                    </span>
                </Aux>
                :
                <span>
                    <Heart height='30' color='white' />
                </span>
                }
            </div>
        </div>
    )
}

export default Navbar;
