import React from 'react';
import './Item.css';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

const Item = () => {
    return (
        <div className='w100 FRSS item'>
            <i class="fa-solid fa-grip-vertical"></i>
            <div className='w100 FCSC'>
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default Item