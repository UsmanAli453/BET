import React from 'react'
import flag from "../../assets/images/flag.jpg"


export default function ITExpert() {

    return (
        <>
            <div className='flex py-16 max-w-8xl sm:px-[10rem] space-x-24'>
                <div className='space-y-6 w-1/2'>
                    <h1
                        className={` text-gray-800 text-3xl font-bold w-[30rem] `}
                        data-aos="fade-up" // AOS animation type
                    >
                        Become an <span className='text-CustomBlue'>IT Expert with Us</span> and
                        Represent Australia!
                    </h1>
                    <div className='bg-CustomYellow w-40 h-1'></div>

                    <p
                        className={`text-CustomBlack text-lg font-bold`}
                        data-aos="fade-up" // AOS animation type
                        data-aos-delay="200" // Delay the animation by 200ms
                    >
                        Don’t waste your time, come Join us, start learning and take your first step
                        towards your professional growth.
                    </p>
                    <p
                        className={`text-CustomBlack text-lg`}
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
                <div className='w-1/2'>
                    <div className="relative w-full">
                        <img
                            src={flag}
                            alt="UX UI Designing"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                            <p className="text-white text-xl font-bold text-center uppercase"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
