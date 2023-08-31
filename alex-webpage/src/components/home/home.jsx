import '../home/home.css'
import Name from '../../imgs/Alex.png'
import Elem from '../../imgs/bgElem.png'
import Self from '../../imgs/Self.png'
import { Icon } from '@iconify/react';
import React from 'react'

export default function Home() {
    return (
        <div id='home' className='home'>
            <img className='elem1' src={Elem} alt="Elem" />
            <img className='elem2' src={Elem} alt="Elem" />
            <div className='homeLeft'>
                <div className="top">
                    <div className="smallLine"></div>
                    <h4>Hello, I'm 👋</h4>
                    <div className='nameImgContainer'>
                        <img className='nameImg' src={Name} alt='Name' />
                    </div>
                    <h5>A developer from <span>Boston</span></h5>
                </div>
                <div className="bottom">
                    <div id='contact'>
                        <h3>Contact me</h3>
                        <h6>Email : <span>AnhNTran56@gmail.com</span></h6>
                        <h6>Phone : <span>857-271-8817</span></h6>
                        <div>
                            <h6><a href="https://www.linkedin.com/in/notalxt/" target='_blank' rel="noreferrer"><Icon icon="line-md:linkedin" color='black' width="40" height="40" /></a></h6>
                            <h6><a href="https://github.com/NotAlxT" target='_blank' rel="noreferrer"><Icon icon="devicon:github" width="40" height="40" /></a></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homeRight'>

                <div class="card">
                    <div class="align">
                        <span class="red"></span>
                        <span class="yellow"></span>
                        <span class="green"></span>
                    </div>
                    <div className="bioContent">
                        <div className='selfContainer'>
                            <img src={Self} alt="" />
                        </div>
                        <div className="bioInfo">
                            <h1>About Me</h1>
                            <p>
                                Hi There, I'm Alex
                                As someone who loves tech and learning new skills. I started off as a self-taught developer,
                                I learned front-end and expanded my knowledge of what is needed to be a well-developed engineer.
                                Taking a step forward, I wanted to expand my understanding of back-end work, so I graduated
                                from a full-stack boot camp. My goal is simple, To make coding my purpose in life.
                                It is creating projects that will make at least one person's life easier.
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
