import React from 'react';
import './page5.styles.scss'
import Computer from '../../assets/img/Computer.png'

const Page5 = () => {
    return (
        <div id='index-5'>
            <div className="content">
                <div className='left'>
                    <div className='title'>SALES</div>
                    <div className='subtitle'>Create Homepage Youtube & Instagram</div>
                    <div className='button'>Fieldmake</div>
                </div>
                <img src={Computer} />
            </div>
        </div>
    )
}

export default Page5;