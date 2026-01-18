import React from 'react';
import './Item.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

const Item = () => {
    return (
        <div className='w100 FCSS item'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Item