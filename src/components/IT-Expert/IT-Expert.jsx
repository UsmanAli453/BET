import React, { useState } from 'react'
import flag from "../../assets/images/flag.jpg"
import WebDevImg from "../../assets/images/WebDevImg.jpg"
import img from "../../assets/images/img-7.jpg"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function ITExpert() {
    const [image , setImage] = useState(0)

    const images = [flag , WebDevImg , img]

    return (
        <>
            <div className='flex md:flex-row flex-col py-16 max-w-8xl sm:px-[10rem] px-5 md:space-x-24 space-y-10 md:space-y-0'>
                <div className='space-y-6 md:w-1/2'>
                    <h1
                        className={` text-gray-800 text-2xl md:text-3xl font-bold md:w-[30rem] `}
                        data-aos="fade-up" // AOS animation type
                    >
                        Become an <span className='text-CustomBlue'>IT Expert with Us</span> and
                        Represent Australia!
                    </h1>
                    <div className='bg-CustomYellow w-40 h-1'></div>

                    <p
                        className={`text-CustomBlack md:text-lg font-bold`}
                        data-aos="fade-up" // AOS animation type
                        data-aos-delay="200" // Delay the animation by 200ms
                    >
                        Don’t waste your time, come Join us, start learning and take your first step
                        towards your professional growth.
                    </p>
                    <p
                        className={`text-CustomBlack md:text-lg`}
                        data-aos="fade-up" // AOS animation type
                        data-aos-delay="200" // Delay the animation by 200ms
                    >
                        In present world, Information technology has become vital. From newly small
                        corporations to large multinational companies, there is a fast shift from manual
                        activities to automation. This has created massive chances for those who have
                        highly skilled in information technology education. No matter whether you are
                        an office assistant or a CEO of an organization, if you never updated yourself
                        with the required computer or IT skill set then you have a high risk of losing
                        your job. So be a master of your field by taking this quality training and get the
                        endless job opportunities in today’s market. If you want to launch your own
                        computer technology startup and want to be own boss with managing your
                        company then Black Edge Tech is the best institute for sure! After completing certified IT courses, you will also get the opportunities provided by freelance websites.
                    </p>
                </div>
                <div className='md:w-1/2 '>
                    <div className="relative h-[30rem] flex">
                        
                            <img
                                src={images[image]}
                                alt="UX UI Designing"
                                className="w-full h-full object-cover"
                            />

                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className='bg-CustomYellow absolute left-0 p-2 hover:cursor-pointer'>
                                <IoIosArrowBack color='white'  onClick={()=>{image === 0 ? setImage(2) : setImage(image-1)}}/>
                            </div>
                            <div className='bg-CustomYellow absolute right-0 p-2 hover:cursor-pointer'>
                                <IoIosArrowForward color='white'  onClick={()=>{image === 2 ? setImage(0) : setImage(image+1)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
