import React from 'react'
import Code from '../Assets/Code.jpg'
import { useState } from 'react'
function Card({name, text, img={Code}}) {

  return (
    <div class="group h-96 w-80 [perspective:1000px] float-left">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className='absolute inset-0'>
            <img src={Code} />
        </div>


        <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
             <h1>Flip</h1>
        </div>    
</div>
</div>
//     <div className=" w-64 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mt-8 dark:border-gray-700 scale-90  hover:[transform:rotateY(180deg)] [transfrom-style:preserve-3d] transition-all duration-500 float-left">
//     <a href="#">
//         <img className="rounded-t-lg" src={img} alt="" />
//     </a>
//     <div className="p-5  [backface-visibility:hidden]">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
//         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>
  )
}

export default Card