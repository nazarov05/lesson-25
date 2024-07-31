import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='container'>
                <div className="futer">
                <div className="clasname">
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Demo</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
                </div>
                <div className='bottom'>
                     <h1>Footer</h1>
                    <span className='line'></span>
                    <p>Hojiakbar</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
