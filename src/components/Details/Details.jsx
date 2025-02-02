import React from 'react'
import image from "../../assets/images/WebDevImg.jpg"
import { FaRegClock } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LiaMoneyCheckSolid } from "react-icons/lia";
import { TbCertificate } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";

export default function Details() {
  return (
    <>
      <div className='flex md:flex-row flex-col md:space-x-14 space-y-5 max-w-8xl md:px-[10rem] px-5 mt-10'>
        <div className="relative md:w-[35rem] w-[22rem]">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className='bg-white p-4 md:w-96 nd:h-72'>
            <h1 className='font-semibold text-xl text-CustomBlack'>COURSE FEATURES</h1>
            <div className=' flex mt-5 justify-between'>
                <p className='flex items-center text-md text-CustomBlack'><FaRegClock className='text-CustomYellow mr-1  '/>Duration</p>
                <p className=' text-md text-CustomBlack'>06 Months</p>
            </div>
            <div className=' flex mt-5 justify-between'>
                <p className='flex items-center text-md text-CustomBlack'><IoMdCheckboxOutline className='text-CustomYellow mr-1  '/>Project/Assignment</p>
                <p className=' text-md text-CustomBlack'>Yes</p>
            </div>
            <div className=' flex mt-5 justify-between'>
                <p className='flex items-center text-md text-CustomBlack '><LiaMoneyCheckSolid className='text-CustomYellow mr-1  '/>Course Fees</p>
                <p className=' text-md text-CustomBlack'>Aud 120</p>
            </div>
            <div className=' flex mt-5 justify-between'>
                <p className='flex items-center text-md text-CustomBlack'><TbCertificate className='text-CustomYellow mr-1  '/>Certificate </p>
                <p className=' text-md text-CustomBlack'>Yes(Paid)</p>
            </div>
            <div className=' flex mt-5 justify-between'>
                <p className='flex items-center text-md text-CustomBlack'><FaChartBar className='text-CustomYellow mr-1  '/>Career Guidance </p>
                <p className=' text-md text-CustomBlack'>Yes</p>
            </div>
        </div>
      </div>
    </>
  )
}
