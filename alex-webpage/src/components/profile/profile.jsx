import React from 'react'
import './profile.css'
import Elem from '../../imgs/bgElem.png'
import Self2 from '../../imgs/Self2.jpg'

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
                        <img className='Self2' src={Self2} alt="Self" />

                        <span><h1 className='title'>My Profile</h1></span>
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
