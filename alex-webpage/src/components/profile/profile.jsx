import React from 'react'
import Nav from '../nav/nav'
import './profile.css'

export default function Profile() {

  return (
    <div className='w-full h-full bg-contain bg-black '>
      <div className='flex flex-col w-full justify-center items-center gap-10'>
        <Nav />

        <div className='flex justify-center items-center w-full h-[70vh] flex-col'>

          <div className='text-white text-9xl zeyada-regular'>
            About me
          </div>

          <div className="relative flex">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
          </div>

        </div>

        <div className='bg-white w-[70%] h-[1px] rounded-lg mt-10'></div>

        <div className='flex justify-around w-[70%]'>
          <div className='text-white zeyada-regular flex text-5xl'>Experience</div>
          <div className='text-white zeyada-regular flex text-5xl'></div>
        </div>

        <div className='flex justify-start w-[70%] flex-col gap-10'>
          <div className='text-white flex flex-row gap-1'>
            <span className='flex justify-center items-center w-60 h-14 rounded-xl bg-[#414141]'>
              <h1>Software Developer</h1>
            </span>

            <span className='flex bg-[#2e2e2e] rounded-xl w-full h-full p-10'>
              <div>
asd
              </div>
            </span>
          </div>

          <div className='text-white flex bg-[#414141] rounded-xl w-60 h-14 justify-center items-center'>
            <h1>Real Estate Developer</h1>
          </div>

        </div>

        <div className='flex items-center justify-center'>
          <div className='text-white'>
            <div className='flex flex-row gap-10'>
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

          <div className='flex flex-row w-full h-[100vh]'>
            <div>

            </div>

            <div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
