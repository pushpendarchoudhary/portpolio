import React from 'react';
import "./Footer.css";
import gmaillogo from "../img/gmail-icon-logo-svgrepo-com.svg";
import phonelogo from "../img/phone-call-svgrepo-com.svg";
import linkedinlogo from "../img/linkedin-icon-2-logo-svgrepo-com.svg";
import whatsapplogo from "../img/whatsapp-icon-logo-svgrepo-com.svg";
import githublogo from "../img/github-icon-1-logo-svgrepo-com.svg";
import instalogo from "../img/instagram-2-1-logo-svgrepo-com.svg";

const Footer =()=>{
    return (
        <footer>
            <nav>
                <ul className='Footer-list'>
                <li><a href="https://wa.me/917351544474"><img src={whatsapplogo} alt='whatsapp'/><div>WhatsApp</div></a></li>
                <li><a href="tel:+917351544474"><img src={phonelogo} alt='phone'/><div>+917351544474</div></a></li>
                <li><a href="mailto:cpushpendar47@gmail.com"><img src={gmaillogo} alt='gmail'/><div>Email</div></a></li>
                <li><a href="https://github.com/pushpendarchoudhary"><img src={githublogo} alt='github'/><div>GitHub</div></a></li>
                <li><a href="https://www.linkedin.com/in/pushpendar-c-353403132/"><img src={linkedinlogo} alt='linkedin'/><div>LinkedIn</div></a></li>
                <li><a href="https://www.instagram.com/p.choudhary428/?hl=en"><img src={instalogo} alt='instagram'/><div>Instagram</div></a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;