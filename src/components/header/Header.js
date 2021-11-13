import React from 'react';
import './header.styles.scss';
import Logo from '../../assets/img/logo.png';
import Home from '../../assets/img/home.png'

const Header = () => {
    return (
        <div id='header'>
            <div className='right'>
                <img className='logo' src={Logo}/>
            </div>
            <div className='left'>
                <div className="navigation">
                    <div className='selected'>
                        <img src={Home} style={{marginRight: '5px'}}/>
                        Home
                    </div>
                    <div>Sales</div>
                    <div>CRM</div>
                    <div>Electronic office</div>
                    <div>Cloud ERP</div>
                    <div>SSL</div>
                </div>
            </div>
        </div>
    )
}

export default Header;