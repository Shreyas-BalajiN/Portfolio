import React from 'react'
import Abog from '../Assets/Abog.png'
import Stars from '../Assets/Stars.png'
import Birds from '../Assets/Birds.png'
import { SiJavascript, SiTailwindcss, SiNodedotjs, SiReact, SiExpress, SiSpringboot, SiHtml5, SiCss3, SiPython, SiFlask, SiGooglecloud, SiAmazonaws, SiAngular, SiCsharp } from "react-icons/si";
import {DiJava} from "react-icons/di";
import Sun from '../Assets/Sun.png'
import Moon from '../Assets/Moon.png'
function AboutMe({light}) {
  return (
    <div id="AboutMe" className={`bg-no-repeat bg-position bg-bottom bg-cover border-b-2 border-white ${light? 'bg-sky-400 brightness-90':'bg-slate-700 brightness-50'} justify-start flex w-screen scr-length`} style={{backgroundImage:`url(${Abog})`}}>
    <div className='left-margin'>
    <h1 className='text-5xl text-orange-500 mt-20 font-bold font-sans'>About Me</h1>
    <p className='text-white mt-7 text-lg t-width'>
         Hello! 👋 I'm a dedicated Full Stack Developer with one year of experience, 
         specializing in JavaScript and Java. Proficient in ReactJS, Spring Boot, C# and NodeJS, 
         I've contributed to diverse projects, crafting seamless user interfaces and robust server-side solutions.
          My passion lies in delivering high-quality software that aligns with user needs and business goals. 
          I thrive in collaborative environments and continuously explore emerging technologies to enhance my skills. </p>
    <h1 className='text-2xl text-orange-500 mt-5'>My Playground</h1>
    <div className='mt-4'>
     <div className='group'><SiHtml5 color='Orange' size='2.5rem' className='float-left mr-3'/><span className='side-bar-info group-hover:scale-100 [margin-left:67px] -mt-10'>HTML</span></div>
     <SiCss3 color='Blue' size='2.5rem' className=' mr-3 float-left'/>
     <SiJavascript color='yellow' size='2.5rem' className='float-left mr-3'/>
     <DiJava color='red' size='2.5rem' className='mr-3 bg-white rounded-lg float-left'/>
     <SiCsharp color='blue' size='2.5rem'className='mr-3 bg-white rounded-lg'/><br />
     <SiReact color='Blue' size='2.5rem' className='float-left mr-3'/>
     <SiTailwindcss color='Blue' size='2.5rem' className='float-left mr-3'/>
     <SiSpringboot color='Green' size='2.5rem' className='float-left mr-3 bg-slate-700 p-1 rounded-lg'/>
     <SiNodedotjs color='green' size='2.5rem' className='float-left bg-slate-300 mr-3 rounded-lg'/>
     <SiExpress color='Blue' size='2.5rem' className='float-left mr-3 bg-slate-800 p-1 rounded-lg'/>
     <SiAmazonaws color='orange' size='2.5rem' className='rounded-lg p-1 bg-slate-700'/>
    </div>
    <h1 className='text-2xl text-orange-500 mt-5'>My Curiosity</h1>
    <div className='icons'>
    <SiPython color='white' size='2.5rem' className='float-left mr-3'/>
    <SiFlask color='gray' size='2.5rem' className='float-left mr-3'/>
    <SiAngular color='red' size='2.5rem' className='float-left mr-3'/>
    <SiGooglecloud color='blue' size='2.5rem' className='float-left mr-3'/>
    </div> 
    </div>
    {!light&& <img src={Stars} alt="stars" className='stars w-48 h-56 top-10 transition-all float-left scale-75'/>}   
    {light&& <img src={Birds} alt="stars" className='stars w-48 h-56 top-10 transition-all float-left l scale-75'/>}   
    <br/>
    <img src={light ? Sun : Moon} id="cel" className={`celest w-30 h-24 absolute right-28 top-10 mt-10`} alt="cel"/>
    {!light&&<img src={Stars} alt="stars" className='stars w-56 h-56 top-10 transition-all float-left ml-40 rotate-90 scale-75'/>}  
    {light&& <img src={Birds} alt="stars" className='stars w-48 h-56 top-10 transition-all float-left ml-40 mt-12 scale-75'/>} 
    <br/>  
    {!light&& <img src={Stars} alt="stars" className='stars w-48 h-56 top-10 transition-all float-left scale-75 ml-10 mt-8'/>}
    </div>
  )
}

export default AboutMe