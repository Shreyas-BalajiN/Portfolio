import React from 'react'
import Mountain from '../Assets/Mountain.png'
import Moon from '../Assets/Moon.png'
import Sun from '../Assets/Sun.png'
import { useState } from 'react'
import Stars from '../Assets/Stars.png'
import Birds from '../Assets/Birds.png'
import { useEffect } from 'react'
import {SiGithub, SiLinkedin, SiMaildotru} from 'react-icons/si'
export default function Land() {
  const [bg,changeBg]=useState(true);
  const [cel, changeCel]=useState(true);
  const [bri, changeBri]=useState(true);
  const [ext, changeExt]=useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [dusk, setdusk]=useState(false);
  const [dawn, setDawn]=useState(false);
  const [light, setLight]= useState(true);
  useEffect(() => {
    console.log(window.innerWidth)
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  const handleChange=()=>{
        setdusk(true)
        
      setTimeout(()=>{
        changeCel(!cel)
        changeBri(!bri)
        changeExt(!ext)
        changeBg(!bg)
        setLight(!light)
        setDawn(true)
      },2000) 
        setTimeout(()=>{
          setdusk(false)
          
        },2000)
        setTimeout(()=>{
          setDawn(false)
        },4000)
  }
  return (
<div id="Home"
  className={`${bg ? ' relative w-screen bg-position items-center text-center justify-center bg-no-repeat bg-fixed' : ' relative w-screen h-screen items-center text-center justify-center bg-no-repeat bg-cover bg-position bg-fixed'} ${light?'bg-sky-400 transition-all [transition-duration:2800ms]':'bg-slate-700 transition-all [transition-duration:2800ms] '}`}
  style={{ backgroundImage: `url(${Mountain})`, backgroundSize:'100% auto', width:'100wh', height:'100vh', filter: bri?'brightness(90%)':'brightness(45%)'}}
>
<div className="relative">
       <div className='aboutme'>
       <div className={`opacity-0 absolute ${bg ? 'text-black':'text-white '} transition-opacity  duration-1000 ease-in-out ${isVisible ? 'opacity-100' : ''} flex flex-col text`} style={{ filter: 'brightness(100%)'}}>
          <h1 className='text-3xl '>Hi, I'm Shreyas Balaji Nagaraja </h1>
          <h1 className='text-lg'>A full stack developer </h1>
         {bg&& <h1 className='text-lg'>Before getting to know me, <b>try clicking on the sun.</b> </h1>}
         {!bg&& <h1 className='text-lg'> Ta-da its night, now lets get started</h1>}
         <a href='Shreyas_Nagaraja_CV.pdf' download="Shreyas_Resume.pdf"><button className='rounded-xl font-semibold p-1 mt-3 opacity-90 hover:bg-sky-200 text-black bg-slate-50 border-b-4 border-l-2 hover:[border-bottom-width:6px] hover:border-l-4 border-black'>Download Resume</button></a>
         <div className='mt-2 flex'>
         <a href="https://github.com/Shreyas-BalajiN"><SiGithub size={25} className='ml-1 hover:scale-125'/></a>
         <a href='https://www.linkedin.com/in/shreyas-balaji-nagaraja-9b06ba1b9/'><SiLinkedin size={25} className='ml-5 hover:scale-125'/></a>
         <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfsckBVJStvpbQXjQzNRcLjwVsggCjZLWMmXQdfmghcpRgJnnvNLXWJKCHvwxPkngQkBsV"><SiMaildotru size={25} className='ml-5 hover:scale-125'/></a>
         </div>
          
        </div>
        </div>

        {!ext&& <img src={Stars} alt="stars" className='stars w-48 h-56 top-10 transition-all float-left'/>}   
        {!ext&&<img src={Stars} alt="stars" className='stars w-56 h-56 top-10 transition-all float-left ml-40 rotate-90'/>}   
        {!ext&&<img src={Stars} alt="stars" className='stars w-48 h-56 top-10 transition-all float-left ml-96 rotate-45'/>}   
        {!ext&&<img src={Stars} alt="stars" className='stars w-48 h-56 top-10 absolute right-28 transition-all float-left ml-96 rotate-45'/>}   
        {ext&&<img src={Birds} alt="Birds"className='w-30 h-24 absolute right-28 top-10 transition-all'/>}
        <img src={cel ? Sun : Moon} id="cel" className={`w-30 h-24 absolute right-28 top-10 ${dusk?'transformation':''} ${dawn?'transformation2':''}`} alt="cel" onClick={handleChange} />
    </div>
    {/* <img src={Mountain} className='bg-cover w-screen h-screen' style={{ filter: bri?'brightness(90%)':'brightness(35%)' }}alt="Mountain"/> */}
    </div>
  )
}
