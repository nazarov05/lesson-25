import React, { useState } from 'react'
import  Toggle  from './toggle/Toggle';
import useLocalStorage from "use-local-storage";
import './Navbar.css'
const Navbar = () => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);
    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)
    return (
        <div className='header'>
            <nav className='navbar'>
                <ul id='box-item-navbar' className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                        
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#footer' onClick={closeMenu}>Footer</a>
                    </li>
                </ul>
            </nav>
            <div className="night_mode"> <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} /></div>
        </div>
    )
}
export default Navbar
