// import React, { useState } from 'react';
// const user = JSON.parse(localStorage.getItem('resume-user'))
// const [isEditingFirstName, setIsEditingFirstName] = useState(false);
// const [editedFirstName, setEditedFirstName] = useState(user.Firstname);

// export const handleFirstNameClick = () => {
//   setIsEditingFirstName(true);
// };

// export const handleFirstNameChange = (e) => {
//   setEditedFirstName(e.target.value);
// };

// export const handleFirstNameBlur = () => {
//   setIsEditingFirstName(false);
// };

// export const renderFirstName = () => {
//   if (isEditingFirstName || editedFirstName === "") {
//     return (
//       <input
//         type="text"
//         value={editedFirstName}
//         onClick={handleFirstNameClick}
//         onChange={handleFirstNameChange}
//         onBlur={handleFirstNameBlur}
//         autoFocus
        
//         style={{height:"30px",width:"auto"}}
//       />
//     );
//   } else {
//     return (
//       <h1 style={{fontSize:"40px"}}onClick={handleFirstNameClick}>{editedFirstName.toUpperCase()}</h1>
//     );
//   }
// };
//   ///////

// //////

// //////

// const [isEditingObjective, setIsEditingObjective] = useState(false);
// const [editedObjective, setEditedObjective] = useState(user.Objective);

// export const handleObjectiveClick = () => {
//   setIsEditingObjective(true);
// };

// export const handleObjectiveChange = (e) => {
//   setEditedObjective(e.target.value);
// };

// export const handleObjectiveBlur = () => {
//   setIsEditingObjective(false);
// };

// export const renderObjective = () => {
//   if (isEditingObjective || editedObjective === "") {
//     return (
//       <input
//         type="text"
//         value={editedObjective}
//         onClick={handleObjectiveClick}
//         onChange={handleObjectiveChange}
//         onBlur={handleObjectiveBlur}
//         onKeyUp={(e) => {
//           if (e.key === 'Enter') {
//             handleObjectiveBlur();
//           } else if (e.key === 'Escape') {
//             setEditedObjective(user.Objective); 
//             handleObjectiveBlur();
//           }
//         }}
//         autoFocus
//         style={{
//           height: "50px",
//           width: "100%",
//           border: "1px solid #ccc", 
//         }}
//       />
//     );
//   } else {
//     return (
//       <p className='para' onClick={handleObjectiveClick}>
//         {editedObjective}
//       </p>
//     );
//   }
// };
// ///////////////////////////////////////////
// ///////////////////////////////////////////
// const [isEditingEmail, setIsEditingEmail] = useState(false);
// const [editedEmail, setEditedEmail] = useState(user.Email);

// export const handleEmailClick = () => {
//   setIsEditingEmail(true);
// };

// export const handleEmailChange = (e) => {
//   setEditedEmail(e.target.value);
// };

// export const handleEmailBlur = () => {
//   setIsEditingEmail(false);
// };

// export const renderEmail = () => {
//   if (isEditingEmail || editedEmail === "") {
//     return (
//       <input
//         type="text"
//         value={editedEmail}
//         onClick={handleEmailClick}
//         onChange={handleEmailChange}
//         onBlur={handleEmailBlur}
//         onKeyUp={(e) => {
//           if (e.key === 'Enter') {
//             handleEmailBlur();
//           } else if (e.key === 'Escape') {
//             setEditedEmail(user.Email); 
//             handleEmailBlur();
//           }
//         }}
//         autoFocus
//         style={{
//           height: "50px",
//           width: "100%",
//           border: "1px solid #ccc", 
//         }}
//       />
//     );
//   } else {
//     return (
//       <p className='para' onClick={handleEmailClick}>
//         {editedEmail}
//       </p>
//     );
//   }
// };
// ////////////////////
// ////////////
// //////////

// const [isEditingEducation, setIsEditingEducation] = useState(false);
// const [editedEducation, setEditedEducation] = useState(user.education[0].EduDes);

// export const handleEducationClick = () => {
//   setIsEditingEducation(true);
// };

// export const handleEducationChange = (e) => {
//   setEditedEducation(e.target.value);
// };

// export const handleEducationBlur = () => {
//   setIsEditingEducation(false);
// };

// export const renderEducation = () => {
//   if (isEditingEducation || editedEducation === "") {
//     return (
//       <input
//         type="text"
//         value={editedEducation}
//         onClick={handleEducationClick}
//         onChange={handleEducationChange}
//         onBlur={handleEducationBlur}
//         onKeyUp={(e) => {
//           if (e.key === 'Enter') {
//             handleEducationBlur();
//           } else if (e.key === 'Escape') {
//             setEditedEducation(user.education[0].EduDes); 
//             handleEducationBlur();
//           }
//         }}
//         autoFocus
//         style={{
//           height: "30px",
//           width: "100%",
//           border: "1px solid #ccc", 
//         }}
//       />
//     );
//   } else {
//     return (
//       <p className='para' onClick={handleEducationClick}>
//         {editedEducation}
//       </p>
//     );
//   }
// };









// ///////

// //////

// //////

// const [isEditingLastName, setIsEditingLastName] = useState(false);
// const [editedLastName, setEditedLastName] = useState(user.Lastname);

// export const handleLastNameClick = () => {
//   setIsEditingLastName(true);
// };

// export const handleLastNameChange = (e) => {
//   setEditedLastName(e.target.value);
// };

// export const handleLastNameBlur = () => {
//   setIsEditingLastName(false);
// };

// export const renderLastName = () => {
//   if (isEditingLastName|| editedLastName === "") {
//     return (
//       <input
//         type="text"
//         value={editedLastName}
//         onClick={handleLastNameClick}
//         onChange={handleLastNameChange}
//         onBlur={handleLastNameBlur}
//         autoFocus
//         style={{height:"30px",width:"auto"}}
//       />
//     );
//   } else {
//     return (
//       <h1 style={{fontSize:"40px"}}onClick={handleLastNameClick}>{editedLastName.toUpperCase()}</h1>
//     );
//   }
// };