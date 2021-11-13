import React from 'react';
import './page2.styles.scss'
import Computer from '../../assets/img/Computer.png'

const Page2 = () => {
    return (
        <div id='index-2'>
            <div className="title">IT CLOUD SEA’S IT SERVICE</div>
            <div className="content">
                <img src={Computer} />
                <div className='right'>
                    <div className='title'>ASSETS</div>
                    <div className='subtitle'>Inventory Management</div>
                    <div className='button'>G-Book</div>
                </div>
            </div>
        </div>
    )
}

export default Page2;