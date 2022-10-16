import React from 'react'
import './style.css'

export default function Stepper({totalStep,currentStep}) {
  let arr=new Array(parseInt(totalStep)).fill(null).map((_, i) => i)
  console.log(currentStep)
  return ( 
        <div className="mdl-stepper-horizontal-alternative">
      {
        arr.map((item,i)=><>
        <div className={`mdl-stepper-step ${currentStep>=i ? 'active-step' : ''}`}>
        <div className="mdl-stepper-circle"><span>{i+1}</span></div>
       
        <div className={`mdl-stepper-bar-left ${currentStep>=i ? 'active-step-left' : ''}`}></div>
        <div className={`mdl-stepper-bar-right ${currentStep>=i ? 'active-step-right' : ''}`}></div>
      </div>
        </>)
      }
    </div>

  )
}
