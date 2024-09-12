import React from 'react'
import './heroSection.css'

const HeroSection = () => {
  return (
    <>
        <div className='hero'> 
            <div className='hero-content'>
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH YOUR SHOES. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, soluta!</p>
                <div className='hero-btns'>
                    <button className='shop-btn'> Shop Now </button>
                    <button className='cat-btn'> Category </button>
                </div>
                <div className='shop-on'>
                    <p>Also Available On</p>
                    <div className='shop-icons'>
                        <img src="https://static.thearcweb.com/images/PROD/PROD-e92aad7f-a0d7-463f-8643-69708ee1ddcd.png" alt=":(" />
                        <img src="https://m.media-amazon.com/images/I/51HCHFclmmL.jpg" alt=":(" />
                    </div>  
                </div>  
            </div>
            <div className='hero-img'>
                <img src="https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg" alt="Failed to load image :(" />
            </div>
        </div>
    </>
  )
}

export default HeroSection