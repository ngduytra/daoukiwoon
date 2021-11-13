import React from 'react';
import './page3.styles.scss'
import Computer2 from '../../assets/img/Computer2.png'

const Page3 = () => {
    return (
        <div id='index-3'>
            <div className="content">
                <div className='left'>
                    <div className='title'>ACCOUNTING</div>
                    <div className='subtitle'>Accounting</div>
                    <div className='button'>G-Book</div>
                </div>
                <img src={Computer2} />
            </div>
        </div>
    )
}

export default Page3;