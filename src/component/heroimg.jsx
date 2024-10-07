import React from "react";
import heroimg from '../assets/img/hero.jpg'
const Heroimg=()=>{
    return (
        <>
        <div className="relative mt-10">
    <img src={heroimg} className="w-full h-[70%]" />
    <div class="absolute  top-3 left-4 flex  ">
      <div className="flex gap-10 items-center ml-5 mr-5">
        <p className="text-[20px] font-semibold">Sql</p>
        <p className="text-[20px] font-semibold">Html</p>
        <p className="text-[20px] font-semibold">css</p>
        <p className="text-[20px] font-semibold">Javascript</p>
        <p className="text-[20px] font-semibold">python</p>
        <p className="text-[20px] font-semibold">java</p>
        <p className="text-[20px] font-semibold">c</p>
        <p className="text-[20px] font-semibold">cpp</p>
        <p className="text-[20px] font-semibold">PHP</p>
        <p className="text-[20px] font-semibold">Scala</p>
        <p className="text-[20px] font-semibold">c#</p>
        <p className="text-[20px] font-semibold">Tailwind css</p>
        <p className="text-[20px] font-semibold">Node js</p>
      </div>
    </div>
    <div className="absolute left-12 top-[30%] flex items-center ">
        <h1 className="font-bold text-[4rem] text-white">Simple & Easy <span className="text-green-700 font-bold text-[3rem]">Learning</span></h1>
    </div>
    <div className="absolute left-12 top-[43%] text-center">
        <input type="search" className="w-[400px] text-[20px] p-3" placeholder="search your favourite tutorial" />
        <p className="mt-8 text-[30px] font-bold">Check our -<span className="text-green-700"> Video Courses | Certifications | Tutorials</span></p>
    </div>
   </div>
        </>
    )
   
   }
export default Heroimg