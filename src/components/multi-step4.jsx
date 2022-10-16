import React from 'react';
import '../../src/App';
import Header from './Header/Header';
import Tickmark from  '../../src/asssets/tick-mark.png';
import TopBlock from './TopBlock';
import Button from './Button';
const Finalstep = () => {
  return (
    <>
   
                
                    <div className="tickmark-div">
                        <img src={Tickmark} alt='tick' className="tickmark-img" />
                    </div>
                    <div className="text-center mt-4">
                        <TopBlock mainHeading='Congratulations, Eren' subHeading='You have completed onboarding, you can start usign the Eden!'/>
                    </div>
                    <div className="field-container">
                        <div className="form-group mt-3">
                        <Button type="submit" label="Launch Eden"/>

                            {/* <button type="submit" className="btn btn-primary w-100 workspace-btn">Launch Eden</button> */}
                        </div>
                    </div>
               
    </>
  )
}

export default Finalstep