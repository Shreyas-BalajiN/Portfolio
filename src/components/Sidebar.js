import React, { useState } from 'react'

function Sidebar() {
const [btname, changeName] = useState('home')
const change=()=>{
    changeName("Home")
}
  return (
    <div className='side-bar'>Sidebar
    <br />
    <button onMouseOver={change}>{btname}</button><br />
    <button>About Me</button><br />
    <button>Resume</button>
    
    </div>
  )
}

export default Sidebar