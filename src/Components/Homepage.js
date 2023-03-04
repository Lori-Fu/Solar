import React from 'react'
import Navigator from './Navigator.js';

export const HomepageBg = () => {
  return <img id='HomepageBg' src='https://solarelectrictexas.com/wp-content/uploads/slider-bg-1.jpg' alt='solar'></img>;
}
export const Homepage = () => {
  return (
    <div>
        < Navigator />
        <div className='homepage-container'>
          <div id='Header'>
            <h1>Welcome to Solar World</h1>
            <p>some description</p>
          </div>
          <HomepageBg/>
        </div>
    </div>
  )
}
