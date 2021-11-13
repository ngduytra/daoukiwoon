import React from 'react';
import './page7.styles.scss'
import Computer from '../../assets/img/Computer.png'

const Page7 = () => {
    return (
        <div id='index-7'>
            <div className="content">
                <div className='left'>
                    <div className='title'>SECURITY</div>
                    <div className='subtitle'>SSL server</div>
                    <div className='button'>SECTIGO</div>
                </div>
                <img src={Computer} />
            </div>
        </div>
    )
}

export default Page7;