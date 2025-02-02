import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Demanding() {
    const Data = [
        "Internship model with highly industry-experienced Web Developers.",
        "Master the valuable skills for a wide array of jobs within IT companies, from start-ups to global organizations",
        "Training Projects will be fragmented into small bits that only focus on one bit at a time.",
        "Complete coverage of programming logic and dynamic websites with the best coding process.",
        "Review Sessions will be maintained properly so that students can easily take a review to freshen their memory.",
        "By following these techniques, we can keep firming up your foundation while putting more weight on it."
    ]
    return (
        <>
            <div className='space-y-6'>
                <h1
                    className={` text-gray-800 text-2xl md:text-3xl font-bold md:w-[55rem]`}

                >
                    Why is <span className='text-CustomBlue'>Web Development </span>  Course training so trendy and
                    demanding?
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
