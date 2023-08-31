import React from 'react'
import './nav.css'
// import Logo from '../../imgs/logo-white.png'
import { Icon } from '@iconify/react';
import Loader from '../loader/loader';

export default function Nav() {
    return (
        <div className='nav'>
              {/* <img src={Logo} alt="Logo" />   */}
              <Loader />
              <div className='navLinks'>
                <a href='/'><Icon icon="solar:home-2-broken" width="40" height="40" /></a>
                <a href='/profile'><Icon icon="fluent-mdl2:contact" width="40" height="40" /></a>
                <a href='/'><Icon icon="solar:folder-with-files-broken" width="40" height="40" /></a>
              </div>
        </div>
    )
}
