import React from 'react'
import './profile.css'
import Elem from '../../imgs/bgElem.png'
import BG from '../../imgs/bgHex.jpg'
import { Icon } from '@iconify/react';
import Nav from '../nav/nav'

export default function Profile2() {
    return (
        <>
            <Nav />
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
                        <div className="relative top-20">
                            <div className="loader"></div>
                            <div className="loader"></div>
                            <div className="loader"></div>
                        </div>

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
                                    <p>+1 (857) 271-8817</p>
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
                                    <h6><a href="https://alextran.netlify.app/" target='_blank' rel="noreferrer"><Icon icon="gg:website" color='black' width="40" height="40" /></a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="box2">
                        <div className="skillTitle">
                            <div>
                                <h1>Skills</h1>
                                <p>Languages & Tech Stacks</p>
                            </div>
                            <div className='line'>
                                <div className=""></div>
                            </div>
                        </div>
                        <div className="skillCard">
                            <div className="cardSub">
                                <Icon className='Icon' icon="logos:html-5" width="40" height="40" />
                                <div class="skillText">
                                    <p>HTML</p>
                                </div>
                            </div>
                            <div className="cardSub">
                                <Icon className='Icon' icon="logos:css-3" width="40" height="40" />
                                <div class="skillText">
                                    <p>CSS</p>
                                </div>
                            </div>
                            <div className="cardSub">
                                <Icon className='Icon' icon="devicon:tailwindcss" width="40" height="40" />
                                <div class="skillText">
                                    <p>TailWind</p>
                                </div>
                            </div>
                            <div className="cardSub">
                                <Icon className='Icon' icon="skill-icons:javascript" width="40" height="40" />

                                <div class="skillText">
                                    <p>Java- Script</p>
                                </div>
                            </div>
                            <div className="cardSub">
                                <Icon className='Icon' icon="skill-icons:typescript" width="40" height="40" />
                                <div class="skillText">
                                    <p>Type- Script</p>
                                </div>
                            </div>
                            <div className="cardSub">
                                <Icon className='Icon' icon="skill-icons:react-dark" width="40" height="40" />
                                <div class="skillText">
                                    <p>React</p>
                                </div>
                            </div>
                            <div className="cardSub">
                                <Icon className='Icon' icon="skill-icons:python-dark" width="40" height="40" />
                                <div class="skillText">
                                    <p>Python</p>
                                </div>
                            </div>
                            <div className="cardSub">
                                <Icon className='Icon' icon="logos:postgresql" width="40" height="40" />
                                <div class="skillText">
                                    <p>SQL</p>
                                </div>
                            </div>
                            <div className="cardSub">
                                <Icon className='Icon' icon="logos:flask" width="40" height="40" />
                                <div class="skillText">
                                    <p>Flask</p>
                                </div>
                            </div>
                            <div className="cardSub">
                                <Icon className='Icon' icon="vscode-icons:file-type-node" width="40" height="40" />
                                <div class="skillText">
                                    <p>Node.js</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box3">
                        <div className="skillTitle">
                            <div>
                                <h1>Attributes</h1>
                                <p>Soft Skills</p>
                            </div>
                            <div className='line'>
                                <div className=""></div>
                            </div>
                        </div>
                        <div className="attributeSkill">
                            <div className="attributeCard">
                                <h1 className="attributeCardTitle">Leadership</h1>
                            </div>
                            <div className="attributeCard">
                                <h1 className="attributeCardTitle">Communication</h1>
                            </div>
                            <div className="attributeCard">
                                <h1 className="attributeCardTitle">Negotiation</h1>
                            </div>
                            <div className="attributeCard">
                                <h1 className="attributeCardTitle">Critical Thinking</h1>
                            </div>
                            <div className="attributeCard">
                                <h1 className="attributeCardTitle">Positivity</h1>
                            </div>
                            <div className="attributeCard">
                                <h1 className="attributeCardTitle">Dependability</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
