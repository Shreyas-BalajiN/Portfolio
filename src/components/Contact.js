import React from 'react'
import ContactBg from '../Assets/ContactBg2.jpg'
import { SiMaildotru } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
function Contact() {
  return (
    <div className='w-screen scr-length overflow-hidden bg-no-repeat bg-cover justify-start flex' id="ContactMe" style={{backgroundImage:`url(${ContactBg})`}}>
    <div className='left-margin'>
    <h1 className='text-5xl text-orange-500 mt-16 font-bold font-sans'>Contact Me</h1>
    <div className='cardposcon'>
    <div className="w-72 h-80 card-margin mt-36 bg-slate-800 bg-opacity-90 rounded-lg justify-center items-center flex flex-col shadow duration-500 float-left border-2 border-orange-300">
    <SiMaildotru className='w-36 h-24 mt-9' color='white' /><br />
    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfsckBVJStvpbQXjQzNRcLjwVsggCjZLWMmXQdfmghcpRgJnnvNLXWJKCHvwxPkngQkBsV" className='p-4'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Mail Me</button></a>
    </div>
    <div className="w-72 h-80 card-margin mt-36 bg-slate-800 bg-opacity-90 rounded-lg justify-center items-center flex flex-col shadow duration-500 float-left border-2 border-orange-300">
    <SiLinkedin className='w-36 h-24 mt-9' color='white' /><br />
    <a href="https://www.linkedin.com/in/shreyas-balaji-nagaraja-9b06ba1b9/" className='p-4'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Connect With Me</button></a>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact