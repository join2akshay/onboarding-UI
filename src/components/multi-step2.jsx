import React from 'react';
import '../../src/App';
import Button from './Button';
import TextBox from './TextBox';
import TopBlock from './TopBlock';

const workspace = (props) => {
    const handleStep=()=>{
        props.setStep(2)
    }
  return (
<>
                    
                    <div className="text-center">
                        <TopBlock mainHeading={'Let\'s set up a home for all your work'} subHeading='You can always create another workspace later'/>
                     
                    </div>
                    <div className="field-container">
                        <form>
                            <div className="form-group">
                                <TextBox placeholder='Eden' label='Workspace Name' className='hello' id="workspacename" onChange={(e)=>console.log(e)}/>
                                
                            </div>
                            <div className="mt-3">
                               <span className="d-flex">
                                    <label for="basic-url" class="form-label">Workspace URL</label>
                                    <p className="optional">(optional)</p>
                                </span> 
                                <div className="input-group mb-3">
                                    <span className="input-group-text web-link" id="basic-addon3">www.eden.com/</span>
                                    <input type="text" className="form-control" id="basic-url" placeholder="Example" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                            <Button type="submit" label="Create Workspace" onClick={handleStep}/>

                                {/* <button type="submit" className="btn btn-primary w-100 workspace-btn" onClick={handleStep}>Create Workspace</button> */}
                            </div>
                        </form>
                    </div>
                
                </>
  )
}

export default workspace