import React from 'react';
import '../../src/App';
import Oneuser from  '../../src/asssets/one-user.png';
import team from  '../../src/asssets/team.png';
import TopBlock from './TopBlock';
import Button from './Button';
const Community = (props) => {
    const handleStep=()=>{
        props.setStep(3)
    }

    const handleProfileCard = () => {
        document.getElementById("myself").classList.add("active-card")
        document.getElementById("team").classList.remove("active-card")
    }
    
    const handleTeamCard = () => {
        document.getElementById("myself").classList.remove("active-card")
        document.getElementById("team").classList.add("active-card")
    }

  return (
    <>
                    <div className="text-center">
                        <TopBlock mainHeading='How are you planning to use Eden?' subHeading={'we\'ll streamline your setup experience accordingly.'}/>
                        {/* <p className="welcom-txt">How are you planning to use Eden?</p>
                        <p>we'll streamline your setup experience accordingly.</p> */}
                    </div>
                    <div className="field-container">
                        <div className="profile-card">
                            <div className="myself-card" id="myself" onClick={handleProfileCard}>
                                <img src={Oneuser} className="self-img"/>
                                <div>
                                    <p className="myself">For myself</p>
                                    <p>Writer better. Think more clearly. Stay organized.</p>
                                </div>
                            </div>
                            <div className="myself-card" id="team"  onClick={handleTeamCard}>
                                <img src={team} className="self-img"/>
                                <div>
                                    <p className="myself">With my team</p>
                                    <p>wikis, docs, tasks & projects, all in one place.</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                        <Button type="submit" label="Create Workspace" onClick={handleStep}/>

                            {/* <button type="submit" className="btn btn-primary w-100 workspace-btn" onClick={handleStep}>Create Workspace</button> */}
                        </div>
                    </div>
              
    </>
  )
}

export default Community