import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='' />
                <p>Savor the convenience of having your favorite dishes delivered right to your doorstep, where every meal is crafted with care and delivered fresh, fast, and hassle-free. Whether you’re craving comfort food, gourmet flavors, or healthy options, our app ensures a seamless experience, bringing joy to every bite with just a few taps. Your satisfaction is our priority, making every delivery a delightful journey from kitchen to table.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.X_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                    <img src={assets.instagram_icon} alt='' />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9104426524</li>
                    <li>contact@bitemani.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © BiTEMANi.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer