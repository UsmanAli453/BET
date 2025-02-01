import React from 'react'
import { TrainingInput ,Courses, Reason, ITExpert } from '../../components/component'

export default function Training() {
  return (
    <>
        <section className="py-10">
              <TrainingInput/>
              <Courses/>
              <Reason/>
              <ITExpert/>
        </section>
    </>
  )
}
