import React from 'react';
import './page4.styles.scss'
import Computer from '../../assets/img/Computer.png'

const list = [
    'Webmail',
    'E-Apporval',
    'E-Document',
    'E-Check in.out',
    'Co-work/Project'
]

const Page2 = () => {
    return (
        <div id='index-4'>
            <div className="content">
                <img src={Computer} />
                <div className='right'>
                    <div className='title'>HR & ADMIN</div>
                    <div className='tag-container'>
                    {
                        list.map((value, idx) => (
                            <div className="tags" key={idx}>
                                <div className='subtitle'>{value}</div>
                                <div className='button'>G-Book</div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2;