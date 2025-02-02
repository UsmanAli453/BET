import React from 'react'
import img from "../../assets/images/image.jpg"
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Courses() {
    const navigate = useNavigate()
    const Data = [
        {
            imgText: "UX UI DESIGNING",
            heading: "UX UI Designing Course",
            image: img,
            text: "Love to make designs on paper and want it to reach it to another level, then why not start Learning UX UI Designing now."
        },
        {
            imgText: "WEBSITE DEVELOPMENT",
            heading: "web development course",
            image: img,
            text: "Become a full stack Web Developer and exploit your chances of getting hired and lead the variety of modern technologies."
        },
        {
            imgText: "FRONT-END DEVELOPMENT",
            heading: "FRONT-END DEVELOPMENT COURSE",
            image: img,
            text: "Build your future and career scope in Website Designing with our highly experienced Web Designing mentors."
        },
        {
            imgText: "Full Stack Developer Course",
            heading: "Full Stack Developer Course",
            image: img,
            text: "Interested in making Front End and Back End Web Applications then do join this course."
        },
        {
            imgText: "REACT JS & NATIVE",
            heading: "REACT JS COURSE",
            image: img,
            text: "Interested in making Web Apps? then start shaping real world applications! Learn from the industry experts."
        },
        {
            imgText: "PYTHON COURSE",
            heading: "PYTHON COURSE",
            image: img,
            text: "Interested in making RESTful APIs of Web Applications with Python , Django, and SQL."
        },
    ]
    return (
        <>
            <div className='px-5 md:px-[160px] space-y-12'>
                <div className=' flex text-justify justify-center'>
                    <p className=' mt-6 text-CustomBlack text-xs md:text-sm md:w-[65rem] p-4 md:p-8 border-l-4 border-CustomBlue bg-gray-100'>Welcome to Valuable Students! Are you confused to decide where to start your career or enhance your IT skills and professionalism? Or you just need some
                        guaranteed counselling with assurance that your selected computer course or field will boost your IT career? If Yes! Then you are at the right place.</p>
                </div >
                <div className='md:grid grid-cols-3 gap-5'>
                    {
                        Data.map(({ imgText, text, image, heading, index }) => {
                            return(

                            
                            <div className='space-y-4 shadow-lg p-4 mb-5 md:mb-0' key={index}>
                                <div className="relative md:w-72 md:h-44 w-80 h-48 ">
                                    <img
                                        src={image}
                                        alt="UX UI Designing"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <p className="text-white text-xl font-bold text-center uppercase">{imgText}</p>
                                    </div>
                                </div>
                                <h1 className='uppercase font-semibold text-CustomBlue'>{heading}</h1>
                                <div className='flex space-x-1'>
                                    {[...Array(5)].map(() => (
                                        <p className='text-CustomYellow'><FaStar /></p>
                                    ))}
                                </div>
                                <p className='text-CustomBlack text-sm w-72 leading-loose'>{text}</p>

                                <button className='bg-CustomYellow px-5 py-2  rounded-lg text-CustomBlack font-semibold border border-CustomBlack' onClick={()=>{navigate("/traininginfo")}}>View Details</button>
                            </div>)
                        })
                    }

                </div>
            </div>
        </>
    )
}
