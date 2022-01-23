import React from 'react';
import gon from './Header.module.css'

const Header = () => {
    return <header className={gon.header}>
        <div>
          <a > <img src="images/www.png" alt="" /> </a>
        </div>
  </header>
}

export default Header;