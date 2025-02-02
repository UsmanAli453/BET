import React from 'react'
import {Description, Details, TrainingInput} from "../../components/component"

export default function TrainingInfo() {
  return (
    <>
        <div className='flex flex-col py-10 bg-gray-100 overflow-hidden'>
                <TrainingInput/>
                <Details/>
                <Description/>
        </div>
    </>
  )
}
