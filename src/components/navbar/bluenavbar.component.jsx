import React from 'react';
import { Link } from 'react-router-dom';
import './bluenavbar.styles.css';


const BlueNavBar = () => {
  return (

    <nav className='n'>
      <section className='header-1'>
        <div className='header1-left'>
          <div className='header1-item'>
            <a className='nav-item-links' href="https://madcapuniversity.com/">MADCAP UNIVERSITY</a>
          </div>
          <div className='header1-item-1'>
            <a className='nav-item-links' href="https://shoppuppyculture.com/"> ❤️ PUPPY CULTURE </a>
          </div>
          <div className='header1-item'>
            <a className='nav-item-links' href="https://www.madcapradio.com.">MADCAP RADIO</a>
          </div>
        </div>
        <div className='header1-right'>
        <div className='nav-item-icons'> <Link to="/login">Login</Link> </div>
          <div className='nav-item-icons'> <Link to="/cart">Cart</Link></div>
        </div>
      </section>
    </nav>

  )
}

export default BlueNavBar;
