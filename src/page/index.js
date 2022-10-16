import React, { useState } from 'react'
import Header from '../components/Header/Header';
import Multistep from '../components/multi-step1';
import Workspace from '../components/multi-step2';
import Community from '../components/multi-step3';
import Finalstep from '../components/multi-step4';
import Stepper from '../components/Stepper';

export default function Main() {
    const [step, setStep] = useState(0)
    return (
      <>
      <div className="multi-step">
        <Stepper totalStep='4' currentStep={step}/>
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                    <Header />
        {step === 0 && <Multistep step={step} setStep={setStep}/>}
        {step === 1 && <Workspace step={step} setStep={setStep}/>}
        {step === 2 && <Community step={step} setStep={setStep}/>}
        {step === 3 && <Finalstep step={step} setStep={setStep}/>}
                </div>
                </div>
                </div>
                </div>

      </>
    );
}
