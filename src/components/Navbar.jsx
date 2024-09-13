import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <nav>
            <div className='logo'> <img className='logo-img' src="https://i.insider.com/53d29d5c6bb3f7a80617ada8?width=800&format=jpeg&auto=webp" alt="Failed to load image :(" /></div>
            <ul>
                <li><a href="#"></a>MENU</li>
                <li><a href="#"></a>LOCATION</li>
                <li><a href="#"></a>ABOUT</li>
                <li><a href="#"></a>CONTACT</li>
            </ul>   
            <button className='login-btn'>Login</button>
        </nav>
    </>
  )
}

export default Navbar