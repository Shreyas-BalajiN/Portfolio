import React from 'react'
import Mountain from '../Assets/Mountain.png'
import Moon from '../Assets/Moon.png'
import Sun from '../Assets/Sun.png'
import { useState } from 'react'
import Stars from '../Assets/Stars.png'
import Birds from '../Assets/Birds.png'
import { useEffect } from 'react'
export default function Land() {
  const [bg,changeBg]=useState(true);
  const [cel, changeCel]=useState(true);
  const [bri, changeBri]=useState(true);
  const [ext, changeExt]=useState(true);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  const handleChange=()=>{
        changeBg(!bg)
        changeCel(!cel)
        changeBri(!bri)
        changeExt(!ext)
  }
  return (
<div
  className={bg ? 'bg-sky-400 relative w-screen h-full items-center text-center justify-center bg-no-repeat bg-cover bg-center bg-fixed' : 'bg-slate-700 relative w-full h-full items-center text-center justify-center bg-no-repeat bg-cover bg-center bg-fixed'}
  style={{ backgroundImage: `url(${Mountain})`, backgroundSize:'100% auto', width:'100wh', filter: bri?'brightness(90%)':'brightness(35%)'}}
>
<div className="relative">
       <div className={`opacity-0 absolute left-48 top-48 ${bg ? 'text-black':'text-white'} transition-opacity brightness-200 duration-1000 ease-in-out ${isVisible ? 'opacity-100' : ''} flex flex-col items-start`} style={{ filter: 'brightness(100%)'}}>
          <h1 className='text-3xl'>Hi, Im Shreyas Balaji Nagaraja </h1>
          <h1 className='text-lg'>A full stack developer </h1>
         {bg&& <h1 className='text-lg'>Before getting to know me, <b>try clicking on the sun.</b> </h1>}
         {!bg&& <h1 className='text-lg'> Now that we are in dark mode, lets get started</h1>}
          
        </div>

        {!ext&& <img src={Stars} className='w-48 h-56 top-10 transition-all float-left'/>}   
        {!ext&&<img src={Stars} className='w-56 h-56 top-10 transition-all float-left ml-40 rotate-90'/>}   
        {!ext&&<img src={Stars} className='w-48 h-56 top-10 transition-all float-left ml-96 rotate-45'/>}   
        {!ext&&<img src={Stars} className='w-48 h-56 top-10 absolute right-28 transition-all float-left ml-96 rotate-45'/>}   
        {ext&&<img src={Birds} className='w-30 h-24 absolute right-28 top-10 transition-all'/>}
        <img src={cel ? Sun : Moon} className='w-30 h-24 absolute right-28 top-10 transition-all' onClick={handleChange} />
    </div>
    {/* <img src={Mountain} className='bg-cover w-screen h-screen' style={{ filter: bri?'brightness(90%)':'brightness(35%)' }}alt="Mountain"/> */}
    </div>
  )
}
