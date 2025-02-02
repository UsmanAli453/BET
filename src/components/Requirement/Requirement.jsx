import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ForWho() {
    const Data = [
        "Just a basic computer user.",
        "No programming skills necessary to take this course."
    ]
  return (
    <>
         <div className='space-y-6 mt-10'>
                        <h1
                            className={` text-gray-800 text-2xl md:text-3xl font-bold md:w-[55rem]`}
        
                        >
                            Requirements
                        </h1>
                        <div className='bg-CustomYellow w-40 h-1'></div>
                        {
                            Data.map((items, index) => {
                                return (
                                    <p className={` flex text-CustomBlack md:text-lg items-center`} key={index}><MdKeyboardDoubleArrowRight className='text-CustomYellow'/>{items}</p>
                                )
        
                            })
                        }
        
                    </div>
    </>
  )
}
