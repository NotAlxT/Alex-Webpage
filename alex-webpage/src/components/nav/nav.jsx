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
                <a href='/'><Icon icon="solar:home-2-broken" width="30" height="30" /></a>
                <a href='/'><Icon icon="fluent-mdl2:contact" width="30" height="30" /></a>
                <a href='/'><Icon icon="solar:folder-with-files-broken" width="30" height="30" /></a>
              </div>
        </div>
    )
}
