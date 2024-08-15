import React from "react";
import Nav from "../nav/nav";
import "./profile.css";
import CodingBG from "../../imgs/Coding2.jpg"

export default function Profile() {
  return (
    <div className="w-full h-full bg-contain bg-black ">
      <div className="flex flex-col w-full justify-center items-center gap-10">
        {/*naviation */}
        <Nav />
        <div className="flex justify-center items-center w-full h-[70vh] flex-col gap-5">
          <div className="text-white text-9xl ">Profile</div>
          {/*Picture animator*/}
          <div className="relative flex ">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
          </div>
        </div>
        {/*Line divider horizontal*/}
        <div className="bg-[rgba(159,159,159,0.5)] w-[70%] h-[1px] rounded-lg mt-10 "></div>
        {/*Content */}
        <div className="bg-[#0b0b0b] w-full h-full flex flex-row justify-center items-center">
          {/* Left Content*/}
          <div className="flex w-[60%]">
            <div> 
              <img className="object-cover h-full w-full" src={CodingBG} alt="Coding Background" />
          </div>
           
          </div>
          {/*Divider Verticle*/}
          <div className="flex h-full w-[.5px] bg-[rgb(58,58,58)]"> </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center w-[40%] gap-5">
            <div className="flex flex-col w-full items-center gap-5">
              <div className="flex flex-col w-[70%]">
                <h1 className="text-white text-4xl">Full-Stack Developer</h1>
                <h1 className="flex text-[rgba(255,255,255,0.5)] text-3xl">
                  About Me
                </h1>
              </div>

              {/* <div className="flex w-[70%] h-[.5px] bg-[rgb(58,58,58)]"> </div> */}

              <div className="flex text-xl justify-start text-white">
                <h1>Skills/Tech</h1>
              </div>

              <div className="flex w-[70%] h-[.5px] bg-[rgb(58,58,58)]"> </div>

              <div className="flex justify-center w-[70%] overflow-hidden text-black">
                <div className="flex justify-center w-full text-[rgb(83,83,83)] gap-10 slide">
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

              <div className="flex justify-center w-[70%] overflow-hidden text-black ">
                <div className="flex justify-center w-full text-[rgb(83,83,83)] gap-10 slideReverse">
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
              <div className="flex w-[70%] h-[.5px] bg-[rgb(58,58,58)]"> </div>

              <div className="flex flex-col w-[70%] gap-5">
                <div className="flex justify-center text-xl text-white">
                  Education
                </div>

                <div className="flex w-full h-[.5px] bg-[rgb(58,58,58)]"> </div>

                <div className="flex flex-col ">
                  <div className="flex text-xl text-white">Quincy College</div>
                  <div className="flex text-[rgb(83,83,83)]">
                    Business Management
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="flex text-xl  text-white">4GeekAcademy</div>
                  <div className="text-[rgb(83,83,83)]">
                    Full-Stack Development
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="flex text-xl text-white">Fort Lee</div>
                  <div className="text-[rgb(83,83,83)]">
                    Mechanical Engineering
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[70%] gap-5">
                <div className="flex justify-center text-xl text-white">
                  Experiance
                </div>

                <div className="flex w-full h-[.5px] bg-[rgb(58,58,58)]"> </div>

                <div className="flex flex-col ">
                  <div className="flex text-xl text-white">CourtCheck</div>
                  <div className="flex text-[rgb(83,83,83)] justify-between">
                   <p>Front-End Engineer</p>
                   <p>Dec, 2023 - Present</p>
                  </div>
                </div>
              </div>

              <div className="flex w-[70%] h-[.5px] bg-[rgb(58,58,58)]"> </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
