import React from 'react';
import logo from '../../asssets/logo.png';

const Header = () => {
  return (
    <div className="d-flex justify-content-center">
        <img src={logo} alt='logo' className="main-logo"/>
        <p className="cmp-heading">Eden</p>
    </div>  
  )
}

export default Header