import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2> Order Your Favorite Food Here </h2>
            <p>"Craving something delicious? Order your favorite meals, anytime, anywhere, with just a few taps!"</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header