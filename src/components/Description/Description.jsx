import React, { useState } from 'react'
import { Demanding, Enroll, ForWho, ProfessionalCourse } from '../component'
import KeyFeatures from '../KeyFeatures/KeyFeatures'


export default function Description() {

    return (
        <>
            <div className='md:px-[10rem] px-5 bg-white mt-10 self-center max-w-8xl py-10'>
                <h1 className='text-3xl font-bold text-center text-CustomBlue'>Description</h1>
                <p className='mt-3 md:text-lg'>Black Edge Tech offers a comprehensive Front-End development course in Australia that equips you with the skills to become a skilled Front-End developer. From HTML and CSS advanced JavaScript to React and Tailwind CSS techniques, our expert-led training will help you create stunning and functional websites. Enroll today and kickstart your dream career in Front-End development!</p>
                <ProfessionalCourse/>  
                <KeyFeatures/> 
                <Demanding/>
                <ForWho/>
                <Enroll/>
            </div>
        </>
    )
}
