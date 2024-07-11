import React from 'react'
import Nav from '../nav/nav'
import './profile.css'

export default function Profile() {

  return (
    <div className='w-full h-full bg-contain bg-black '>
      <div className='flex flex-col w-full justify-center items-center gap-10'>
        <Nav />

        <div className='flex justify-center items-center w-full h-[70vh] flex-col gap-5'>

          <div className='text-white text-9xl zeyada-regular '>
            About me
          </div>

          <div className="relative flex ">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
          </div>

        </div>

        <div className='bg-white w-[70%] h-[1px] rounded-lg mt-10 '></div>

        <div className='flex flex-col justify-center h-[200px]'>
          <div className='flex justify-center w-[700px] overflow-hidden h-[200px] text-black'>
            <div className='flex justify-center w-full text-white gap-10 slide'>
              <p>HTML</p>
              <p>|</p>
              <p>CSS</p>
              <p>|</p>
              <p>JavaScript</p>
              <p>|</p>
              <p>React</p>
              <p>|</p>
              <p>Next.js</p>
              <p>|</p>
              <p>Tailwind</p>
              <p>|</p>
              <p>HTML</p>
              <p>|</p>
              <p>CSS</p>
              <p>|</p>
              <p>JavaScript</p>
              <p>|</p>
              <p>React</p>
              <p>|</p>
              <p>Next.js</p>
              <p>|</p>
              <p>Tailwind</p>
            </div>
          </div>
          <div className='flex justify-center w-[700px] overflow-hidden h-[200px] text-black'>
            <div className='flex justify-center w-full text-white gap-10 slideReverse'>
              <p>Python</p>
              <p>|</p>
              <p>SQL</p>
              <p>|</p>
              <p>Git</p>
              <p>|</p>
              <p>Flux</p>
              <p>|</p>
              <p>Node.js</p>
              <p>|</p>
              <p>Python</p>
              <p>|</p>
              <p>SQL</p>
              <p>|</p>
              <p>Git</p>
              <p>|</p>
              <p>Flux</p>
              <p>|</p>
              <p>Node.js</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
