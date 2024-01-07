import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { IoCall } from "react-icons/io5";
function Sidebar() {
  return (
    <div className='side-bar'>
    <a href="#Home"><SidebarIcon icon={<FaHome size='28'/>} text="Home"/></a>
    <a href="#AboutMe"><SidebarIcon icon={<FaInfo size='28'/>} text="About Me"/></a>
    <a href="#Resume"><SidebarIcon icon={<IoMdDocument size='28' />}text="Resume" /></a>
    <a href="#ContactMe"><SidebarIcon icon={<IoCall size='28'/>} text="Contact Me"/></a>
    </div>
  )
}
const SidebarIcon=({icon, text})=>{
return(
<div className='side-bar-icons group'>
 {icon}
 <span className='side-bar-info group-hover:scale-100'>
  {text}
 </span>
</div>);
}
export default Sidebar