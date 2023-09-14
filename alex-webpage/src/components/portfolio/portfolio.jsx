import React, { useEffect, useRef, useState } from 'react'
import './portfolio.css'

export default function Portfolio() {
  const myRef = useRef()
  const [elementVisible, setElementVisible] = useState()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementVisible(entry.isIntersecting)
      console.log('elementVisible', elementVisible)
    })
    observer.observe(myRef.current)

  }, [elementVisible])

  return (
    <div>


      <div className="pSection1">
        <section className='pLeft'>
          <div className="portfolioCard">
            <div ref={myRef}>
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
            <div ref={myRef}>
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
            <div ref={myRef}>
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
