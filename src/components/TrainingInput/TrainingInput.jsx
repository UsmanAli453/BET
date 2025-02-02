import React from 'react'

export default function TrainingInput() {
    return (
        <>
            <div>
                <div className='h-[100px] bg-CustomBlack flex items-center'>
                    <h1 className='text-white font-semibold  text-sm md:text-xl pl-10' > <span className='underline'>COMPUTER COURSES</span> IN AUSRAILIA | BEST IT TRAININGS</h1>
                </div>
                <div className='bg-CustomBlue flex  flex-col md:flex-row justify-around  md:py-2 h-[35rem] items-center'>
                    <div className='flex flex-col items-center'>
                        <p className='font-semibold text-white mb-2 text-lg md:text-2xl'>Call Or WhatsApp on</p>
                        <p className='font-semibold bg-white px-6 py-1 text-CustomBlack text-lg md:text-2xl'>04 169 22045</p>
                    </div>
                    <div className='flex flex-col items-center bg-white w-[350px] md:w-[485px] py-5 space-y-10'>
                        <h1 className='uppercase font-bold text-lg md:text-2xl w-64 md:w-72 leading-loose text-center text-CustomBlack'>Interested in Online Demo Class?</h1>
                        <div className='flex flex-col space-y-9 w-[300px] md:w-[400px]'>
                            <input type="text" placeholder='Your Name' className='outline-none border-b '/>
                            <input type="text" placeholder='Your Email' className='outline-none border-b '/>
                            <input type="text" placeholder='Your Phone' className='outline-none border-b '/>
                            <input type="text" placeholder='Your Message' className='outline-none border-b '/>
                        </div>
                        <button className='bg-CustomYellow px-4 py-2 rounded-lg text-white '>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
