import React, { useEffect, useState } from 'react'
import twoAM from '../../imgs/2AM.png'
import Spotify from '../../imgs/SpotifyClone.png'

import './portfolio.css'

export default function Portfolio() {

  return (
    <div>

      <div className="pSection1">
        <section className='pLeft'>
          <div className="portfolioCard">
            <div >
              <img className='projectImg' src={Spotify} alt="Spotify" />
            </div>
            <div className="pCardContent">
              <h1>Spotify Clone</h1>
              <p>TypeScript, Next.js, Tailwind, Supabase{'(API hosting)'}, Stripe{'(Payment API)'} 
              <br />
              <a href="https://github.com/NotAlxT/Spotify-Clone" target='blank'>Code</a>
              <br />
              <a href="https://spotifyclone-alx-seven.vercel.app/" target='blank'>Website</a>
              </p>
            </div>
          </div>
        </section>
        <section className='pRight'>
          <div>
            <p>I have a passion for music, and it is a part of my daily existence. From the moment I wake up, during my work hours, moments of relaxation, and even when I'm out and about, Spotify accompanies me, serving as the soundtrack to my diverse moods and experiences. I wanted to recreate the source that brings me so much joy and motivation.</p>
          </div>
        </section>
      </div>


      <div className="pSection2">
        <section className='pLeft'>
          <div>
            <p>My first major project, an eCommerce website featuring video reviews and live chat functionality—a venture that also represented my introduction to collaborative group projects</p>
          </div>
        </section>
        <section className='pRight'>
          <div className="portfolioCard2">
            <div >
            <img className='projectImg' src={twoAM} alt="2AM" />
            </div>
            <div className="pCardContent2">
              <h1>2AM</h1>
              <p>React, JavaScript, Css, Bootstrap
              <br />
              <a href="https://github.com/NotAlxT/2AM-group-project" target='blank'>Code</a>
              <br />
              <a href="https://2amproject.netlify.app" target='blank'>Website</a>
              </p>
            </div>
          </div>

        </section>
      </div>

      <div className="pSection1">
        <section className='pLeft'>
          <div className="portfolioCard">
            <div >
              image here
            </div>
            <div className="pCardContent">
              <h1>Title</h1>
              <p>Languages used here</p>
            </div>
          </div>
        </section>
        <section className='pRight'>
          <div>
            <p>Info here</p>
          </div>
        </section>
      </div>


      <div className="pSection2">
        <section className='pLeft'>
          <div>
            <p>Info here</p>
          </div>
        </section>
        <section className='pRight'>
          <div className="portfolioCard2">
            <div>
              image here
            </div>
            <div className="pCardContent2">
              <h1>Title</h1>
              <p>Languages used here</p>
            </div>
          </div>

        </section>
      </div>

      <div className="pSection1">
        <section className='pLeft'>
          <div className="portfolioCard">
            <div>
              image here
            </div>
            <div className="pCardContent">
              <h1>Title</h1>
              <p>Languages used here</p>
            </div>
          </div>
        </section>
        <section className='pRight'>
          <div>
            <p>Info here</p>
          </div>
        </section>
      </div>


      <div className="pSection2">
        <section className='pLeft'>
          <div>
            <p>Info here</p>
          </div>
        </section>
        <section className='pRight'>
          <div className="portfolioCard2">
            <div>
              image here
            </div>
            <div className="pCardContent2">
              <h1>Title</h1>
              <p>Languages used here</p>
            </div>
          </div>

        </section>
      </div> 



    </div>
  )
}
