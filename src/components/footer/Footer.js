import React from 'react';
import './footer.styles.scss'

const Footer = () => {
    return (
        <div id='footer' className="footer">
            <div className="left">
                <div className="title">Vietnam Office</div>
                <div className="street">14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city</div>
                <div className="bussiness-reg">Business resigtration: 0315421202</div>
                <div className="contact">
                    <div className="phone">Tel: 028-3520-2367</div>
                    <div className="mail">sales@dkinno.com</div>
                </div>
                <div className="copyright">Copyright 2021 DaouKiwoom Innocation C0., Ltd</div>
            </div>
            <div className="center">
                <div className="title">Indonesia Office</div>
                <div className="street">Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI Jakarta 12190, Indonsia</div>
                <div className="phone">Tel: +62-21-5082-0038</div>
            </div>
            <div className="right">
                <div className="title">Korea Office</div>
                <div className="street">5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea</div>
            </div>
        </div>
    )
}

export default Footer;