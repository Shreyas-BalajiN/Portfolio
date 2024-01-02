import React from 'react'
import Mountain from '../Assets/Mountain.png'
import Moon from '../Assets/Moon.png'
import Sun from '../Assets/Sun.png'
import { useState } from 'react'
export default function Land() {
  const [bg,changeBg]=useState(true);
  const [cel, changeCel]=useState(true);
  const [bri, changeBri]=useState(true);
  const handleChange=()=>{
        changeBg(!bg)
        changeCel(!cel)
        changeBri(!bri)
  }
  return (
    <div className={bg?'bg-sky-400':'bg-slate-700'}>
    <img src={cel?Sun:Moon} className=' w-24 h-24 z-10 fixed hover:w-48 hover:h-48 mt-10 right-32 transition-all' onClick={handleChange}></img>
    <img src={Mountain} className='bg-cover w-screen h-screen' style={{ filter: bri?'brightness(90%)':'brightness(35%)' }}alt="Mountain"/>
    </div>
  )
}
