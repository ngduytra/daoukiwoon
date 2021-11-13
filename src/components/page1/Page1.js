import React from 'react';
import './page1.styles.scss';
import Hero from '../../assets/img/herobg.png';
import Vector from '../../assets/img/Vector.png';

const Page1 = () => {
    return (
        <div id='index-1'>
            <div className="hero-container">
                <div className='left'>
                    <div>ASIA IT</div>
                    <div>Market Place</div>
                </div>
                <div className='right' style={{backgroundImage: `url(${Hero})`}}>
                    <div className='top'>
                        <div>EN <img src={Vector}/></div>
                        <div>Company  <img src={Vector}/></div>
                        <div>Partner Market Place <img src={Vector}/></div>
                    </div>
                    <div className='bottom'>
                        <div className="tab">
                            <div className="selected">Now</div>
                            <div>Future</div>
                        </div>
                        <div className="detail">
                            <div className="item-info">
                                <div className='amount'>6</div>
                                <div className='desc'>different IT Sortware Networks</div>
                            </div>
                            <div className="item-info">
                                <div className='amount'>32</div>
                                <div className='desc'>partners</div>
                            </div>
                            <div className="item-info">
                                <div className='amount'>4</div>
                                <div className='desc'>countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reminder">
            You are now viewing an <span>&nbsp;IT Software&nbsp;</span> that has been verified by <span>&nbsp;over 1 million users.&nbsp;</span>
            </div>
        </div>
    )
}

export default Page1;