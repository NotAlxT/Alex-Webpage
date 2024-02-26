import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import './projects.css'
import Nav from '../nav/nav';

export default function projects() {

    return (
        <div >
            <Nav />
            <div className={`pHomeContainer`}>

                <section className="pProjectsContainer">
                    <div className="pProject">
                        {/* TODO add img, add link, add design for box layout */}
                        <div className="pContainer">
                            <article className="pCard">
                                <a className="p_card__link" href="/calculator">

                                    <div className="p_card__icon">
                                        <Icon className='pIcon' color="white" width="50" height="50" icon="solar:calculator-broken" />
                                    </div>

                                    <div className="p_card__media">
                                        <Icon className='pIcon' color="white" width="200" height="200" icon="solar:calculator-broken" />
                                    </div>

                                    <div className="p_card__header">
                                        <p className="p_card__header-title">Calculator</p>
                                        
                                        <div className="p_card__header-icon">
                                            <svg viewBox="0 0 28 25">
                                                <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" fill="black"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </a>
                            </article>
                        </div>
                    </div>

                    <div className="pProject">
                        {/* TODO add img, add link, add design for box layout */}
                        <div className="pContainer">
                            <article className="pCard">
                                <a className="p_card__link" href="/timer">

                                    <div className="p_card__icon">
                                        <Icon className='pIcon' icon="ion:timer-outline" color="white" width="50" height="50" />
                                    </div>


                                    <div className="p_card__media">
                                        <Icon className='pIcon' icon="ion:timer-outline" color="white" width="200" height="200" />
                                    </div>


                                    <div className="p_card__header">
                                        <p className="p_card__header-title">Timer</p>
                                        
                                        <div className="p_card__header-icon">
                                            <svg viewBox="0 0 28 25">
                                                <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" fill="black"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </a>
                            </article>
                        </div>
                    </div><div className="pProject">
                        {/* TODO add img, add link, add design for box layout */}
                        <div className="pContainer">
                            <article className="pCard">
                                <a className="p_card__link" href="/todoList">

                                    <div className="p_card__icon">
                                        <Icon className='pIcon' icon="vscode-icons:file-type-todo" color="white" width="50" height="50" />
                                    </div>


                                    <div className="p_card__media">
                                        <Icon className='pIcon' icon="vscode-icons:file-type-todo" color="white" width="200" height="200" />
                                    </div>


                                    <div className="p_card__header">
                                        <p className="p_card__header-title">Todo List</p>
                                        <div className="p_card__header-icon">
                                            <svg viewBox="0 0 28 25">
                                                <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" fill="black"></path>
                                            </svg>
                                        </div>
                                    </div>

                                </a>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
