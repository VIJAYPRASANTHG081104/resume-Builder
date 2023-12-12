import React, { useState } from 'react';
import axios from 'axios'
import { message } from 'antd';


const ExperienceSection = ({ user }) => {

  const user1 = JSON.parse(localStorage.getItem('resume-user'));
  const [editedExperienceDescriptions, setEditedExperienceDescriptions] = useState(
    user.Experience.map((exp) => exp.Rolework)
  );
  const [isEditingExperienceDescriptions, setIsEditingExperienceDescriptions] = useState(
    new Array(user.Experience.length).fill(false)
  );

  const handleEditClick = (index) => {
    const newEditingState = [...isEditingExperienceDescriptions];
    newEditingState[index] = true;
    setIsEditingExperienceDescriptions(newEditingState);
  };

  const handleSaveClick = async(index) => {
    const newDescriptions = [...editedExperienceDescriptions];
    setIsEditingExperienceDescriptions(new Array(user.Experience.length).fill(false));
    try{
      const response = await axios.post('http://localhost:5000/api/user/template3', { Experience:editedExperienceDescriptions, _id: user1._id });
      console.log(response)
      localStorage.setItem('resume-user', JSON.stringify(response.data));
      message.success('update successful')
    }
    catch(error){
      console.log(error)
    }
    
  };

  return (
    <section className="Experience sect">
      
      {user.Experience.slice(0, 3).map((exp, index) => (
        <div className="timeline" style={{ breakInside: "avoid" }} key={index}>
          <div className="left-tl-content">
            <h5 className="tl-title">{exp.Company} in {exp.Place}</h5>
            <p className="para">YEARS: {exp.YearRange}</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">
                {isEditingExperienceDescriptions[index] ? (
                  <textarea
                    type="text"
                    value={editedExperienceDescriptions[index]}
                    onChange={(e) => {
                      const newDescriptions = [...editedExperienceDescriptions];
                      newDescriptions[index] = e.target.value;
                      setEditedExperienceDescriptions(newDescriptions);
                     
                    }}
                    style={{width:"100%"}}
                  />
                ) : (
                  <>
                    {exp.jobRole}
                  </>
                )}
              </h5>
              <p className="para">
                {isEditingExperienceDescriptions[index] ? (
                  <>
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                  </>
                ) : (
                  <span
                    onClick={() => {
                      handleEditClick(index);
                    }}
                  >
                    
                    {editedExperienceDescriptions[index]}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;