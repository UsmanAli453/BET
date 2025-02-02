import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Reason() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true }); // Initialize AOS with desired options
    }, []);
    return (
        <>
            <div className='py-16 md:px-[160px] px-5 space-y-6 '>
                <h1
                    className={` text-gray-800 text-2xl md:text-3xl font-bold md:w-[60rem] `}
                    data-aos="fade-up" // AOS animation type
                >
                    Reason that make our <span className='text-CustomBlue'>Computer & IT Courses</span> highly recommended
                    in Australia?
                </h1>
                <div className='bg-CustomYellow w-40 h-1'></div>

                <p
                    className={`text-CustomBlack md:text-lg`}
                    data-aos="fade-up" // AOS animation type
                    data-aos-delay="200" // Delay the animation by 200ms
                >
                    Here you will become a most trendy highly skilled professional with our Master Trainers, in very short time period. Now you just need to select one or more
                    Computer Courses of your interest and be a part of our demo/trail classes and meet our professional trainers and here you go!
                </p>
                <p
                    className={`text-CustomBlack md:text-lg`}
                    data-aos="fade-up" // AOS animation type
                    data-aos-delay="200" // Delay the animation by 200ms
                >
                    For a very long time, people were searching for a highly professional Computer training Centre in Sydney with a very reasonable fees, where students get most
                    trendy IT Courses training with Industry Experts. Here at Black Edge Tech, student gets all the aspects of Quality Education with international standards that make them confident that in each and every class, they experienced something new and interesting. They don’t need to worry about their spending money on these Certified Computer Courses and valuable time. Students just Join, Learn, Experience, Master and then Professionally Earn.
                </p>
            </div>
        </>
    )
}
