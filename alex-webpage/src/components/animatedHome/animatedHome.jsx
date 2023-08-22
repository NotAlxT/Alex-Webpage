import React from 'react'
import '../animatedHome/animatedHome.css'
import Name from '../../imgs/Alex.png'

export default function AnimatedHome() {
  return (
    <div id='animatedHome'>
        <div id='wrapperLoad'>
            <div className="element">
                <img src={Name} alt="Name" />
            </div>
            <div className="element">
                <h3>Full-Stack Developer</h3>
            </div>
            <div className="element">
                <h3>Mindset Is Everything</h3>
            </div>
            <div className="element">
                <img src={Name} alt="Name" />
            </div>
        </div>
    </div>
  )
}
