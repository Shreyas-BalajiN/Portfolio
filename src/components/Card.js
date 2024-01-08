import React from 'react'
import Code from '../Assets/Code.jpg'
function Card({name, text, img={Code}, techstack, gitlink, desc, deplink}) {

  return (
    <div class="group [perspective:1000px] float-left w-64 mr-4 mt-20 h-96">
    <div class="relative h-full bg-gray-800  border-orange-300 border-2 w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className='absolute inset-0'>
        <img className="rounded-t-lg" src={Code} alt="" />
    <div className="p-3  [backface-visibility:hidden]">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 underline">Tech Stack Used</p>
        <ol className='-mt-2'>
    {techstack?.map(element => (
      <li key={element} className='text-gray-400'>{element}</li>
    ))}
  </ol>
        
    </div>
        </div>


        <div class="relative p-3 h-full w-full rounded-xl bg-gray-800  text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="mt-2 flex flex-col">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Description</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <a href={gitlink} className=' text-blue-500 hover:text-blue-700'>Github Link</a>
        {deplink&&<a href={deplink} className=' text-blue-500 hover:text-blue-700'>Deployment Link</a>}
        </div>
        </div>    
</div>
</div>
  )
}

export default Card