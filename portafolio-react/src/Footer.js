import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__poweredby'>
                <p>POWERED BY JJ AND JF</p>                
            <div className='footer__redes'>
                <InstagramIcon />
                <LinkedInIcon />
                <WhatsAppIcon />
            </div>
            </div>

        </div>
    )
}

export default Footer
