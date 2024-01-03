import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { IoCall } from "react-icons/io5";
function Sidebar() {
  return (
    <div className='side-bar'>
    <SidebarIcon icon={<FaHome size='28'/>} text="Home"/>
    <SidebarIcon icon={<FaInfo size='28'/>} text="About Me"/>
    <SidebarIcon icon={<IoMdDocument size='28' />}text="Resume" />
    <SidebarIcon icon={<IoCall size='28'/>} text="Contact Me"/>
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