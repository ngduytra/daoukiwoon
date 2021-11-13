import React from 'react';
import './page6.styles.scss'
import Computer from '../../assets/img/Computer.png'

const Page6 = () => {
    return (
        <div id='index-6'>
            <div className="content">
                <img src={Computer} />
                <div className='right'>
                    <div className='title'>CUSTOMER</div>
                    <div className='subtitle'>Customer Request Management</div>
                    <div className='button'>OQUFIE</div>
                </div>
            </div>
        </div>
    )
}

export default Page6;