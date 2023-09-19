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
            <div >
            <img className='projectImg' src={twoAM} alt="2AM" />
            </div>
            <div className="pCardContent2">
              <h1>2AM</h1>
              <p>Languages used here</p>
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
