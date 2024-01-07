import React from 'react'
import ContactBg from '../Assets/ContactBg.jpg'
import { TbMailFilled } from "react-icons/tb";
import Card from './Card';
function Contact() {
  return (
    <div style={{backgroundImage:`url(${ContactBg})`}} className='w-screen h-screen bg-no-repeat bg-cover flex' >
    <div className='ml-32'>
    <h1 className='text-5xl text-orange-500 mt-16 font-bold font-sans'>Contact Me</h1>
    <Card img={""} name={<TbMailFilled className='mt-16 w-36 h-36' color='white'/>} text={"+1 9024125119"} />
    
    </div>
    </div>
  )
}

export default Contact