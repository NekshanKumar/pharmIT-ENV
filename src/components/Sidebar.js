import React, { useState } from "react";
 import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
 import { AiFillEnvironment } from "react-icons/ai";

 const Sidebar = () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="flex">
        <div
          className={`bg-dark-purple h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-700 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />        
           <div className="inline-flex">
            <AiFillEnvironment className={`bg-amber-300 text-4xl rounder cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
            
            <h1 className={`text-white origin-left font-medium text-2xl duration-700 
             ${!open && "scale-0"}`}>PharmIT EVA</h1>
 
          </div>
        </div>

        <div className="flex items-center rounded-md bg-light-white mt-6 px-4 py-2">
         <BsSearch className="text-white text-lg block float-left cursor-pointer" />
        </div>
      </div>
    );
 }
 
 export default Sidebar