import React from 'react';
import './card.styles.scss';

const Card = ({data}) => {
    const { title, subtitle, price, currency } = data
    return (
        <div id='card-container' style={{border: title === 'Easy Using Methods' && ' 2px solid #E6367E', background: currency === 'VND' && '#E6367E', color: currency === 'VND' && '#fff'}}>
            <div className='title'>{title}</div>
            <div className='subtitle' style={{color: currency === 'VND' && '#fff'}}>{subtitle}</div>
            <div className="price-container">
                <div className='price' style={{fontSize: price==='0' && '64px'}}>{price}</div>
                <div className="unit-wrapper" >
                    <div className='currency' style={{color: currency === 'VND' && '#fff'}}>{currency}</div>
                    <div className="packet" style={{color: currency === 'VND' && '#fff'}}>Per Month</div>
                </div>
            </div>
        </div>
    )
}

export default Card;