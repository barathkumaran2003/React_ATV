import React from 'react'
import './Footercss.css';
function Footer() {
  return (
    <>
    <div className='footer'>
        <div style={{width: '450px'}}>
            <h2 className='footerhead'> We’re here to help</h2>
            <p className='footerpara'>Strap on your helmet, rev your engine, and dive into the world of ATV & Motorcycle with us!</p>
            <div className='footerdiv'>
                <ion-icon name="logo-facebook" className='footericon' ></ion-icon>
                <ion-icon name="logo-instagram" className='footericon'></ion-icon>
                <ion-icon name="logo-youtube"className='footericon'></ion-icon>
            </div>
        </div>
        <div style={{marginLeft:'120px'}}>
            <h4 className='footerh4'>Subscribe to newsletter, never miss our news.</h4>
            <div style={{display:'flex'}}>
                <input type="text" placeholder=" E-Mail" required className='footerinput' />
                <div className='footerdiv2'>
                    <h5> <samp>GET STARTED</samp></h5>
                </div>
            </div>
            <li className='footerlist'>
                <ul> <a href="" className='footerul'>Demos</a></ul>
                <ul><a href="#ABOUT" className='footerul'>About Us</a></ul>
                <ul><a href="#PROJECT" className='footerul'>Services</a></ul>
                <ul><a href="#CONTACT" className='footerul'>News</a></ul>
                <ul><a href="#CONTACT" className='footerul'>All Pages</a></ul>
            </li>
        </div>
    </div>
    </>
  )
}
export default Footer;
