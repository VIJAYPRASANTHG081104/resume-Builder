import React, { useState } from 'react';


const SkillsSection = ({ user, setUser }) => {
  const [editedSkillsDescriptions, setEditedSkillsDescriptions] = useState(
    user.skills.map((skill) => skill.EduDes) // 
  );
  const [isEditingSkillsDescriptions, setIsEditingSkillsDescriptions] = useState(
    new Array(user.skills.length).fill(false)
  );

  const handleEditClick = (index) => {
    const newEditingState = [...isEditingSkillsDescriptions];
    newEditingState[index] = true;
    setIsEditingSkillsDescriptions(newEditingState);
  };

  const handleSaveClick = (index) => {
    
    const newDescriptions = [...editedSkillsDescriptions];
   
    newDescriptions[index] = editedSkillsDescriptions[index];
    setEditedSkillsDescriptions(newDescriptions);

    
    const newEditingState = [...isEditingSkillsDescriptions];
    newEditingState[index] = false;
    setIsEditingSkillsDescriptions(newEditingState);
  };


  const changeSkillTechnology = (index, newTechnology) => {
    const updatedUser = { ...user };
    updatedUser.skills[index].Technology = newTechnology;
    setUser(updatedUser); 
  };

  return (
    <section className="skills sect">
      {user.skills.slice(0, 3).map((skill, index) => (
        <li style={{ breakInside: "avoid" }} key={index}>
          {isEditingSkillsDescriptions[index] ? (
            <input
              type="text"
              value={editedSkillsDescriptions[index]}
              onChange={(e) => {
                const newDescriptions = [...editedSkillsDescriptions];
                newDescriptions[index] = e.target.value;
                setEditedSkillsDescriptions(newDescriptions);
              }}
              style={{ width: "100%" }}
            />
          ) : (
            <>{editedSkillsDescriptions[index]}</>
          )}
          <p className="para">
            {isEditingSkillsDescriptions[index] ? (
              <button onClick={() => handleSaveClick(index)}>Save</button>
            ) : (
              <h5 onClick={() => handleEditClick(index)}>Edit</h5>
            )}
          </p>
         
          <p className="skill-title">{skill.Technology}</p>  
          <div className="progress-bar">
            <p>{skill.Rating}</p>
          </div>
         
          <input
            type="text"
            placeholder="New Technology"
            onChange={(e) => {
              const newTechnology = e.target.value;
              changeSkillTechnology(index, newTechnology);
            }}
          />
        </li>
      ))}
    </section>
  );
};

export default SkillsSection;
