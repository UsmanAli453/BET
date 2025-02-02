import React, { useState } from 'react'
import code from "../../assets/images/code.jpg";
import img from "../../assets/images/img-7.jpg";
import WebDevImg from "../../assets/images/WebDevImg.jpg";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function ProfessionalCourse() {
    const [image, setImage] = useState(0)

    const images = [code, WebDevImg, img]
  return (
    <>
        <div>
             <div className='flex md:flex-row flex-col md:space-x-24 space-y-10 md:space-y-0 mt-10'>
                    <div className='space-y-6 md:w-1/2'>
                        <h1
                            className={` text-gray-800 text-2xl md:text-3xl font-bold md:w-[30rem]`}

                        >
                            Become a Professional <span className='text-CustomBlue'> Front-End Developer</span> with the Best Web Training Course
                        </h1>
                        <div className='bg-CustomYellow w-40 h-1'></div>

                        <p
                            className={`text-CustomBlack md:text-lg`}
                        >
                            Are you passionate about web development and eager to become a skilled
                            web developer? Black Edge Tech comprehensive course in Australia is
                            your ticket to success. With a focus on the latest web development
                            technologies and techniques, our course empowers you to create visually
                            appealing websites and web applications that are both functional and user-
                            friendly with live projects.
                        </p>
                    </div>
                    <div className='md:w-1/2 '>
                        <div className="relative h-[22rem] flex">

                            <img
                                src={images[image]}
                                alt="UX UI Designing"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className='bg-CustomYellow absolute left-0 p-2 hover:cursor-pointer'>
                                    <IoIosArrowBack color='white' onClick={() => { image === 0 ? setImage(2) : setImage(image - 1) }} />
                                </div>
                                <div className='bg-CustomYellow absolute right-0 p-2 hover:cursor-pointer'>
                                    <IoIosArrowForward color='white' onClick={() => { image === 2 ? setImage(0) : setImage(image + 1) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='space-y-6 mt-10'>
                    <h1
                        className={` text-gray-800 text-2xl md:text-3xl font-bold md:w-[30rem]`}

                    >
                        Why Choose <span className='text-CustomBlue'>Black Edge Tech?</span>
                    </h1>
                    <div className='bg-CustomYellow w-40 h-1'></div>

                    <p
                        className={`text-CustomBlack md:text-lg`}
                    >
                        At Black Edge Tech, we prioritize your success and provide expert guidance and hands-on training to ensure you gain the necessary skills and knowledge.
                        Our course covers everything from the fundamentals of HTML and CSS to Advanced JavaScript. By the end of the course, you'll be equipped to create dynamic
                        and responsive web designs that meet the demands of clients and users.
                    </p>
                </div>
        </div>
    </>
  )
}
