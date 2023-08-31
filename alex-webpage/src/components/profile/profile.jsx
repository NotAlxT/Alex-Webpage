import React from 'react'
import './profile.css'
import Elem from '../../imgs/bgElem.png'
import Self2 from '../../imgs/Self2.jpg'
import BG from '../../imgs/bgWood.jpg'
import { Icon } from '@iconify/react';

export default function Profile() {
    return (
        <>
            <img className='elem3' src={Elem} alt="Elem" />
            <img className='elem4' src={Elem} alt="Elem" />
            <div className="profileContainer">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="leftBox">

                    <div className="box1">
                        <img className='bgImg' src={BG} alt="background" />
                        <img className='Self2' src={Self2} alt="Self" />
                        <div className='aboutMeContainer'>
                            <div className='aboutMeTitle'>
                                <h1>Alex Tran</h1>
                                <p>Boston, Ma</p>
                            </div>
                            <div className='aboutMeContainerSub'>
                                <div className='subContainer'>
                                    <p>Alex Tran</p>
                                    <span className="bar"></span>
                                </div>
                                <div className='subContainer'>
                                    <p>+1 (857)271-8817</p>
                                    <span className="bar"></span>
                                </div>
                            </div>
                            <div className='aboutMeContainerSub'>
                                <div className='subContainer'>
                                    <p>AnhNTran56@gmail.com</p>
                                    <span className="bar2"></span>
                                </div>
                            </div>
                            <div className='aboutMeContainerSub'>
                                <div className='subContainer2'>
                                    <h6><a href="https://www.linkedin.com/in/notalxt/" target='_blank' rel="noreferrer"><Icon icon="line-md:linkedin" color='black' width="40" height="40" /></a></h6>
                                    <h6><a href="https://github.com/NotAlxT" target='_blank' rel="noreferrer"><Icon icon="devicon:github" color='black' width="40" height="40" /></a></h6>
                                    <h6><a href="https://alextran.netlify.app/" target='_blank' rel="noreferrer"><Icon icon="gg:website"color='black' width="40" height="40" /></a></h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <strong></strong>
                            <span></span>
                            <span></span>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="box2">

                    </div>
                    <div className="box3">

                    </div>
                </div>

            </div>
        </>
    )
}
