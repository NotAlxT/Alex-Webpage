import React from 'react'
import './nav.css'
// import Logo from '../../imgs/logo-white.png'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='nav'>
              {/* <img src={Logo} alt="Logo" />   */}
              {/* <Loader /> */}
              <div className='navLinks'>
                <Link to='/'><Icon icon="solar:home-2-broken" width="40" height="40" /></Link>
                <Link to='/profile'><Icon icon="fluent-mdl2:contact" width="40" height="40" /></Link>
                <Link to='/portfolio'><Icon icon="solar:folder-with-files-broken" width="40" height="40" /></Link>
              </div>
        </div>
    )
}
