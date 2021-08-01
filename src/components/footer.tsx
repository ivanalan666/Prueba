import React from 'react';

const Footer = () => {
    let date = new Date();

    setInterval(() => {
        date = new Date();
        console.log('update date');
    }, 1000);
    return (
        <div className="footer">
            <p>copytright @{date.getFullYear()}</p>
            <div className="social">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-whatsapp"></i>
            </div>
        </div>
    )
}

export default Footer;