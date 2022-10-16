import React from 'react';
import '../../src/App';
import Button from './Button';
import Header from './Header/Header';
import TextBox from './TextBox';
import TopBlock from './TopBlock';

const Multistep = (props) => {
    const handleStep=()=>{
        props.setStep(1)
    }
  return (
 <>
                    <div className="text-center">
                        <TopBlock mainHeading='Welcome! First things first...' subHeading='You can always change them later.'/>
                    </div>
                    <div className="field-container">
                        <form>
                            <div className="form-group">
                            <TextBox placeholder="Steve Jobs" label='Full Name' className='hello' id="exampleInputEmail1" onChange={(e)=>console.log(e)}/>
                            </div>
                            <div className="form-group mt-3">
                            <TextBox placeholder="Steve" type="text" label='Display Name' className='hello' onChange={(e)=>console.log(e)}/>

                            </div>
                            <div className="form-group mt-3">
                                <Button type="submit" label="Create Workspace" onClick={handleStep}/>
                            </div>
                        </form>
                    </div>
                
    </>
  )
}

export default Multistep