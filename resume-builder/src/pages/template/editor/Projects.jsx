import React, { useState } from 'react';
import axios from 'axios'
import { message } from 'antd';

const ProjectSection = ({ user }) => {
  const user1 = JSON.parse(localStorage.getItem('resume-user'));
  const [editedProjectDescriptions, setEditedProjectDescriptions] = useState(
    user.Projects.map((pro) => pro.Description)
  );
  const [isEditingProjectDescriptions, setIsEditingProjectDescriptions] = useState(
    new Array(user.Projects.length).fill(false)
  );

  const handleEditClick = (index) => {
    const newEditingState = [...isEditingProjectDescriptions];
    newEditingState[index] = true;
    setIsEditingProjectDescriptions(newEditingState);
  };

  const handleSaveClick = async(index) => {
    const newDescriptions = [...editedProjectDescriptions];
    setIsEditingProjectDescriptions(new Array(user.Projects.length).fill(false));
    try{
      const response = await axios.post('http://localhost:5000/api/user/template4', { Projects:editedProjectDescriptions, _id: user1._id });
      console.log(response)
      localStorage.setItem('resume-user', JSON.stringify(response.data));
      message.success('update successful')
    }
    catch(error){
      console.log(error)
    }
    
  };

  return (
    <section className="Project sect">
      
      {user.Projects.slice(0, 3).map((pro, index) => (
        <div className="timeline" style={{ breakInside: "avoid" }} key={index}>
          <div className="left-tl-content">
            <h5 className="tl-title">{pro.Title} </h5>
            <p className="para">YEARS: {pro.YearRange}</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">
                {isEditingProjectDescriptions[index] ? (
                  <textarea
                    type="text"
                    value={editedProjectDescriptions[index]}
                    onChange={(e) => {
                      const newDescriptions = [...editedProjectDescriptions];
                      newDescriptions[index] = e.target.value;
                      setEditedProjectDescriptions(newDescriptions);
                     
                    }}
                    style={{width:"100%"}}
                  />
                ) : (
                  <>
                    
                  </>
                )}
              </h5>
              <p className="para">
                {isEditingProjectDescriptions[index] ? (
                  <>
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                  </>
                ) : (
                  <span
                    onClick={() => {
                      handleEditClick(index);
                    }}
                  >
                    
                    {editedProjectDescriptions[index]}
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

export default ProjectSection;