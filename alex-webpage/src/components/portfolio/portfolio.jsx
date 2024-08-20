import React from 'react'
import twoAM from '../../imgs/2AM.png'
import Spotify from '../../imgs/SpotifyClone.png'
import CourtCheck from '../../imgs/CourtCheck.png'

import './portfolio.css'
import Nav from '../nav/nav'
import { Carousel, Typography, Button } from "@material-tailwind/react";


export default function Portfolio() {

  return (



    <div className='flex flex-col justify-center items-center gap-10 bg-black'>
      <div className='absolute top-0'>
        <Nav />
      </div>
      
      <Carousel autoplay={true} loop={true} transition={ {type: "spring", duration: 1 }} className="rounded-xl">
        <div className="relative h-full w-full">
          <img
            src={Spotify}
            alt="Spotify Clone"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/85">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Spotify Clone
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-90"
              >
                I have a passion for music, for it's a part of my daily existence.
                From the moment I wake up, during my work hours, moments of relaxation, and even when I'm out and about, Spotify accompanies me, serving as the soundtrack to my diverse moods and experiences.
                I wanted to recreate the source that brings me so much joy and motivation.
              </Typography>
              <div className="flex justify-center gap-2">


                <a href="https://spotifyclone-alx-seven.vercel.app/" target='blank'>
                  <Button size="lg" color="white">
                    Explore Site
                  </Button>
                </a>
                <a href="https://github.com/NotAlxT/Spotify-Clone" target='blank'>
                  <Button size="lg" color="white" variant="text">
                    Code
                  </Button>
                </a>


              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={CourtCheck}
            alt="CourtCheck"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/85">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                CourtCheck
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-90"
              >
                Developed a website for an App-Based Startup company as their lead Web-Developer.
                This app is all about helping basketball enthusiasts locate courts and connect with other players for pickup games and tournaments.
              </Typography>
              <div className="flex justify-center gap-2">
                <a href="https://court-check.netlify.app/" target='blank'>
                  <Button size="lg" color="white">
                    Explore Site
                  </Button>
                </a>
                <a href="https://github.com/NotAlxT/Court-Check" target='blank'>
                  <Button size="lg" color="white" variant="text">
                    Code
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={twoAM}
            alt="2AM"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/85">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                2AM
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-90"
              >
                My first major project, an eCommerce website featuring video reviews and live chat functionality—a venture that also represented my introduction to collaborative group projects.
              </Typography>
              <div className="flex justify-center gap-2">

                <a href="https://2amproject.netlify.app" target='blank'>
                  <Button size="lg" color="white">
                    Explore Site
                  </Button>
                </a>
                <a href="https://github.com/NotAlxT/2AM-group-project" target='blank'>
                  <Button size="lg" color="white" variant="text">
                    Code
                  </Button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </Carousel>

    </div>
  )
}
