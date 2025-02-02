import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ForWho() {
    const Data = [
        "Anyone who wants to learn React to develop Web Applications.",
        "Anyone who wishes to study web tricks and technologies in detail from scratch",
        "Anyone who needs/wants to learn web development",
        "Anyone who wishes to start their own business",
        "Anyone who wishes to do freelancing in web development.",
        "Anyone who wants to improve their fundamental skills and go higher"
    ]
  return (
    <>
         <div className='space-y-6 mt-10'>
                        <h1
                            className={` text-gray-800 text-2xl md:text-3xl font-bold md:w-[55rem]`}
        
                        >
                           Who this <span className='text-CustomBlue'>Course</span> is for
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
