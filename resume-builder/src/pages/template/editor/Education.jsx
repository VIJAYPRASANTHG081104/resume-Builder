import React, { useState } from 'react';
import axios from 'axios'
import { message } from 'antd';

const user1 = JSON.parse(localStorage.getItem('resume-user'));
const EducationSection = ({ user }) => {
  const [editedEducationDescriptions, setEditedEducationDescriptions] = useState(
    user.education.map((edu) => edu.EduDes)
  );
  const [isEditingEducationDescriptions, setIsEditingEducationDescriptions] = useState(
    new Array(user.education.length).fill(false)
  );

  const handleEditClick = (index) => {
    const newEditingState = [...isEditingEducationDescriptions];
    newEditingState[index] = true;
    setIsEditingEducationDescriptions(newEditingState);
  };

  console.log(user1)

  const handleSaveClick = async (index) => {
    const newDescriptions = [...editedEducationDescriptions];
    
    // Assuming setIsEditingEducationDescriptions is an async function
    await setIsEditingEducationDescriptions(new Array(user.education.length).fill(false));
    
    console.log(newDescriptions[index]);
  
    try {
      const response = await axios.post('http://localhost:5000/api/user/template2', {
        _id: user1._id,
        education: [
          ...user1.education(index),
          {
            Qualification: user1.education[index].Qualification,
            Percentage: user1.education[index].Percentage,
            Institution: user1.education[index].Institution,
            YearRange: user1.education[index].YearRange,
            EduDes: newDescriptions[index],
          },
          ...user1.education.slice(index + 1),
        ],
      });
  
      console.log(response);
      localStorage.setItem('resume-user', JSON.stringify(response.data));
      message.success('Update successful');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <section className="education sect">
      
      {user.education.slice(0, 3).map((edu, index) => (
        <div className="timeline" style={{ breakInside: "avoid" }} key={index}>
          <div className="left-tl-content">
            <h5 className="tl-title">{edu.Institution}</h5>
            <p className="para">YEARS: {edu.YearRange}</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">
                {isEditingEducationDescriptions[index] ? (
                  <textarea
                    type="text"
                    value={editedEducationDescriptions[index]}
                    onChange={(e) => {
                      const newDescriptions = [...editedEducationDescriptions];
                      newDescriptions[index] = e.target.value;
                      setEditedEducationDescriptions(newDescriptions)
                    }}
                  />
                ) : (
                  <>
                    {edu.Qualification} Percentage: {edu.Percentage}
                  </>
                )}
              </h5>
              <p className="para">
                {isEditingEducationDescriptions[index] ? (
                  <>
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                  </>
                ) : (
                  <span
                    onClick={() => {
                      handleEditClick(index);
                    }}
                  > 
                    {editedEducationDescriptions[index]}
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

export default EducationSection;