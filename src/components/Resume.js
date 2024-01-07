import React from 'react'
import ResBg from '../Assets/ResBg.jpg'
import Card from './Card'
function Resume() {
  return (
    <div className='w-screen h-screen bg-cover flex overflow-hidden' style={{backgroundImage:`url(${ResBg})`}}>
    <div className='ml-32'>
    <h1 className='text-5xl text-orange-500 mt-16 font-bold font-sans'>My Projects</h1>
    <Card name="Go-meals" text="Meal delivery website" />
    <Card name="Task Manager" text="Todo app built in Angular" />
    <Card name="Inventory Managememt" text="React and Springboot project" />
    <Card name="Inventory Managememt" text="React and Springboot project" />
    <Card name="Food Order Management" text="Microservice and cloud based project using CloudFormation" />
    </div>
    </div>
  )
}

export default Resume