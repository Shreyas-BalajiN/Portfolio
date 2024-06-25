import React from 'react'
import Card from './Card'
function Resume() {
  return (
    <div id="Resume" className='resumePage -ml-1'>
    <div className='left-margin'>
    <h1 className='text-5xl text-orange-500 mt-16 font-bold font-sans'>My Projects</h1>
    <h1 className='text-lg text-orange-500 mt-4 font-bold font-sans flex-wrap'>Try Hovering</h1>
    <div className='cardpos'>
    <Card name="Go-meals" text="Meal Subscription and delivery website" techstack={["ReactJS", "SpringBoot", "MySQL", "JUnit"]} desc="Go-Meals is built using React JS for the front end, ensuring a responsive and interactive user interface. The backend is powered by SpringBoot, with Java handling server-side logic. Data is stored and managed in a MySQL database. The entire system is thoroughly tested using JUnit." gitlink="https://github.com/Shreyas-BalajiN/Go-Meals"/>
    <Card name="Task Manager" text="Todo app built in Angular" techstack={["Angular","Local Storage", "TypeScript"]} desc="Todos Manager, a personal project, utilizes Angular and TypeScript for real-time task management. With browser local storage, users can effortlessly add or remove tasks, ensuring a seamless and dynamic experience." gitlink="https://github.com/Shreyas-BalajiN/Todo-Angular" deplink="https://shreyas-bn-69d2dd.netlify.app/"/>
    <Card name="Inventory Management" text="Items and Stock tracking" techstack={["ReactJS", "SpringBoot", "MySQL", "JUnit"]} desc="
Inventory Management, a collaborative effort among a team of four, integrates React JS for the frontend, SpringBoot for server-side operations, and MySQL for database management. This tech stack provides an efficient solution for stock management in the inventory system" gitlink="https://github.com/Shreyas-BalajiN/Inventory-Management" deplink="https://custom-inventory-management.netlify.app/"/>
    <Card name="Portfolio" text="This Website" techstack={["ReactJS", "JavaScript", "TailWind"]} desc="This Portfolio website uses ReactJS with JavaScript for component resndering and TailWind CSS for styling which provides utility classes and customization" gitlink="https://github.com/Shreyas-BalajiN/Portfolio"/>
    <Card name="Food Order Management" text="Microservice based food order placing applcation" techstack={["ReactJS", "NodeJS", "ExpressJS", "AWS Microservices"]} desc="
Food Order Management, an efficient alternative to phone-in orders, is developed in a Linux environment. Utilizing AWS CloudFormation, React JS, Node JS, Express JS and AWS services, the platform is seamlessly deployed and tested on AWS using CloudFormation and Docker." gitlink="https://github.com/Shreyas-BalajiN/Food-Order"/>
    </div>
    </div>
    </div>
  )
}

export default Resume