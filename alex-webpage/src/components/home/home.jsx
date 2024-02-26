import '../home/home.css'
import Name from '../../imgs/Alex.png'
import { Icon } from '@iconify/react';
import React from 'react'
import Nav from '../nav/nav';

export default function Home() {
    return (

        <div className='homeContainer'>
            <Nav />
            <div id='home' className='home'>
                <div className='homeLeft'>
                    <div className="top">
                        <div className="smallLine"></div>
                        <h4>Hello, I'm 👋</h4>
                        <div className='nameImgContainer'>
                            <img className='nameImg' src={Name} alt='Name' />
                        </div>
                        <h5>A developer from <span>Boston</span></h5>
                        
                    </div>

                </div>
                <div className='homeRight'>
                    <div className="bottom">
                        
                        <div id='contact'>

                            <h3>Contact me</h3>
                            <h6>Email : <span>AnhNTran56@gmail.com</span></h6>
                            <h6>Phone : <span>857-271-8817</span></h6>
                            <div >
                                <h6><a href="https://www.linkedin.com/in/notalxt/" target='_blank' rel="noreferrer"><Icon icon="line-md:linkedin" color='black' width="40" height="40" /></a></h6>
                                <h6><a href="https://github.com/NotAlxT" target='_blank' rel="noreferrer"><Icon icon="devicon:github" width="40" height="40" /></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
