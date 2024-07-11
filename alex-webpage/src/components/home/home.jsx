import '../../index.css'
import '../home/home.css'
import { Icon } from '@iconify/react';
import React from 'react'
import Nav from '../nav/nav';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Home() {
    const [text] = useTypewriter({
        words: ['Software Developer', 'Real Estate Developer',],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 50,
    })
    return (

        <div className='homeBgImg bg-cover h-[100vh] w-full flex flex-col'>
            <Nav />
            <div className='flex flex-col justify-center items-center mt-[10%]'>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='text-[rgb(249,211,200)] m-10 '>Hello 👋, I'm </h4>
                    <div className='bg-[rgb(249,211,200)] w-[150px] h-[1px] rounded-3xl'></div>
                    <div className="btn-shine "> Alex Tran </div>
                    <div className='bg-[rgb(249,211,200)] w-[150px] h-[1px] rounded-3xl'></div>
                    <h1 className='text-2xl text-[rgb(249,211,200)] ' style={{ margin: '50px' }}>
                        I'm a {' '}
                        <span  style={{ color: 'white', backgroundColor:'rgb(100,100,100)' }}>
                            {text}
                        </span>
                        <span style={{color: 'black'}}>
                            <Cursor cursorStyle='|'/>
                        </span>
                        
                    </h1>

                </div>



            </div>
            <div className='flex flex-col absolute bottom-5 left-5 gap-5'>
                <div className='flex flex-col justify-center items-start gap-5 '>
                    <div className='transform rotate-[270deg] text-[rgb(146,146,146)] font-semi font-mono h-20 underline underline-offset-4 zeyada-regular text-2xl'>Follow Me</div>
                    <a href="https://github.com/NotAlxT" target='blank'><div className='hover:bg-[rgb(255,255,255)] rounded-lg h-9 w-9 flex justify-center items-center transition-all ease-in-out duration-300' ><Icon icon="ri:github-fill" width="2rem" height="2rem" /></div></a>
                    <a href="https://www.linkedin.com/in/notalxt/" target='blank'><div className='hover:bg-[rgb(255,255,255)] rounded-lg h-9 w-9 flex justify-center items-center transition-all ease-in-out duration-300' ><Icon icon="entypo-social:linkedin-with-circle" width="2rem" height="2rem" /></div></a>
                    <a href="https://discord.com/channels/@.not_alx" target='blank'><div className='hover:bg-[rgb(255,255,255)] rounded-lg h-9 w-9 flex justify-center items-center transition-all ease-in-out duration-300' ><Icon icon="fontisto:discord" width="2rem" height="2rem" /></div></a>
                    <a href="https://www.instagram.com/not_alx_t" target='blank'><div className='hover:bg-[rgb(255,255,255)] rounded-lg h-9 w-9 flex justify-center items-center transition-all ease-in-out duration-300' ><Icon icon="mage:instagram-circle" width="2rem" height="2rem" /></div></a>
                    <a href="https://www.tiktok.com/@not_alxt" target='blank'><div className='hover:bg-[rgb(255,255,255)] rounded-lg h-9 w-9 flex justify-center items-center transition-all ease-in-out duration-300' ><Icon icon="mage:tiktok-circle" width="2rem" height="2rem" /></div></a>
                </div>
                <div className='flex flex-row text-[rgb(146,146,146)] gap-2'>
                    <h1>Boston</h1>
                    <h1>|</h1>
                    <h1>857.271.8817 </h1>
                    <h1>|</h1>
                    <h1>AnhNTran56@gmail.com</h1>
                </div>
            </div>
        </div>
    )
}
