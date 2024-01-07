import React from 'react'
import ContactBg from '../Assets/ContactBg2.jpg'
import { SiMaildotru } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
function Contact() {
  return (
    <div className='w-screen h-screen bg-no-repeat bg-cover size-auto justify-start flex' id="ContactMe" style={{backgroundImage:`url(${ContactBg})`}}>
    <div className='ml-32'>
    <h1 className='text-5xl text-black mt-16 font-bold font-sans'>Contact Me</h1>
    <div className="w-56  h-64 ml-72 scale-125 mt-36 bg-slate-800 bg-opacity-90 rounded-lg justify-center items-center flex flex-col shadow duration-500 float-left" style={{border:'2px solid orange'}}>
    <SiMaildotru className='w-36 h-24 mt-9' color='white' /><br />
    <a href="mailto:shreyas.nagaraja@dal.ca" className='p-4'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Mail Me</button></a>
    </div>
    <div className="w-56 scale-125 h-64 ml-64 mt-36 bg-slate-800 bg-opacity-90 rounded-lg justify-center items-center flex flex-col shadow duration-500 float-left" style={{border:'2px solid orange'}}>
    <SiLinkedin className='w-36 h-24 mt-9' color='white' /><br />
    <a href="https://www.linkedin.com/in/shreyas-balaji-nagaraja-9b06ba1b9/" className='p-4'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Connect With Me</button></a>
    </div>
    </div>
    </div>
  )
}

export default Contact