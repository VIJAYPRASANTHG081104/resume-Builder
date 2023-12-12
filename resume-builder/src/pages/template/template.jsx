import React, { useRef,useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Template1 from './template1'
import DefaultLayout from '../../components/Defaultlayout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Template2 from './template2'
import Template4 from './template4';
import Template3 from './template3';
import Template6 from './template6';
import Template5 from './template5';
import Templatenew from './templatenew';
import Template8 from './template8';
import { message } from 'antd';
import axios from 'axios';
import editedEducationDescriptions from './editor/Education'

const Template = () => {



  const user = JSON.parse(localStorage.getItem('resume-user'));

  ////FIRST NAME
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState(user.Firstname);

  const handleFirstNameClick = () => {
    setIsEditingFirstName(true);
  };

  const handleFirstNameChange = (e) => {
    setEditedFirstName(e.target.value);
  };

  const handleFirstNameBlur = () => {
    setIsEditingFirstName(false);
  };

  const renderFirstName = () => {
    if (isEditingFirstName ) {
      return (
        <input
          type="text"
          value={editedFirstName}
          onClick={handleFirstNameClick}
          onChange={handleFirstNameChange}
          onBlur={handleFirstNameBlur}
          autoFocus
          style={{height:"30px",width:"auto"}}
        />
      );
    } else {
      return (
        <h1 style={{fontSize:"40px"}}onClick={handleFirstNameClick}>{editedFirstName.toUpperCase()}</h1>
      );
    }
  };
  ///////////////////////////LastName
  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const [editedLastName, setEditedLastName] = useState(user.Lastname);

  const handleLastNameClick = () => {
    setIsEditingLastName(true);
  };

  const handleLastNameChange = (e) => {
    setEditedLastName(e.target.value);
  };

  const handleLastNameBlur = () => {
    setIsEditingLastName(false);
  };

  const renderLastName = () => {
    if (isEditingLastName) {
      return (
        <input
          type="text"
          value={editedLastName}
          onClick={handleLastNameClick}
          onChange={handleLastNameChange}
          onBlur={handleLastNameBlur}
          autoFocus
          style={{height:"30px",width:"auto"}}
        />
      );
    } else {
      return (
        <h1 style={{fontSize:"40px"}}onClick={handleLastNameClick}>{editedLastName.toUpperCase()}</h1>
      );
    }
  };
    ///////

  //////OBJECTIVE

  //////
  
  const [isEditingObjective, setIsEditingObjective] = useState(false);
  const [editedObjective, setEditedObjective] = useState(user.Objective);

  const handleObjectiveClick = () => {
    setIsEditingObjective(true);
  };

  const handleObjectiveChange = (e) => {
    setEditedObjective(e.target.value);
  };

  const handleObjectiveBlur = () => {
    setIsEditingObjective(false);
  };

  const renderObjective = () => {
    if (isEditingObjective) {
      return (
        <input
          type="text"
          value={editedObjective}
          onClick={handleObjectiveClick}
          onChange={handleObjectiveChange}
          onBlur={handleObjectiveBlur}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleObjectiveBlur();
            } else if (e.key === 'Escape') {
              setEditedObjective(user.Objective); 
              handleObjectiveBlur();
            }
          }}
          autoFocus
          style={{
            height: "50px",
            width: "100%",
            border: "1px solid #ccc", 
          }}
        />
      );
    } else {
      return (
        <p className='para' onClick={handleObjectiveClick}>
          {editedObjective}
        </p>
      );
    }
  };
  ///////////////////////////////////////////EMAIL
  ///////////////////////////////////////////
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedEmail, setEditedEmail] = useState(user.Email);

  const handleEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleEmailChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    setIsEditingEmail(false);
  };

  const renderEmail = () => {
    if (isEditingEmail) {
      return (
        <input
          type="text"
          value={editedEmail}
          onClick={handleEmailClick}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleEmailBlur();
            } else if (e.key === 'Escape') {
              setEditedEmail(user.Email); 
              handleEmailBlur();
            }
          }}
          autoFocus
          style={{
            height: "50px",
            width: "100%",
            border: "1px solid #ccc", 
          }}
        />
      );
    } else {
      return (
        <p className='para' onClick={handleEmailClick}>
          {editedEmail}
        </p>
      );
    }
  };
  //////mobileNo

const [isEditingMobilenumber, setIsEditingMobilenumber] = useState(false);
  const [editedMobilenumber, setEditedMobilenumber] = useState(user.Mobilenumber);

  const handleMobilenumberClick = () => {
    setIsEditingMobilenumber(true);
  };

  const handleMobilenumberChange = (e) => {
    setEditedMobilenumber(e.target.value);
  };

  const handleMobilenumberBlur = () => {
    setIsEditingMobilenumber(false);
  };

  const renderMobilenumber = () => {
    if (isEditingMobilenumber) {
      return (
        <input
          type="text"
          value={editedMobilenumber}
          onClick={handleMobilenumberClick}
          onChange={handleMobilenumberChange}
          onBlur={handleMobilenumberBlur}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleMobilenumberBlur();
            } else if (e.key === 'Escape') {
              setEditedMobilenumber(user.Mobilenumber); 
              handleMobilenumberBlur(); // Remove parentheses here
            }
          }}
          autoFocus
          style={{
            height: "50px",
            width: "100%",
            border: "1px solid #ccc", 
          }}
        />
      );
    } else {
      return (
        <p className='para' onClick={handleMobilenumberClick}>
          {editedMobilenumber}
        </p>
      );
    }
  };
  //////////////////////////////////////////////////
  const [isEditingLinkedIn, setIsEditingLinkedIn] = useState(false);
  const [editedLinkedIn, setEditedLinkedIn] = useState(user.LinkedIn);

  const handleLinkedInClick = () => {
    setIsEditingLinkedIn(true);
  };

  const handleLinkedInChange = (e) => {
    setEditedLinkedIn(e.target.value);
  };

  const handleLinkedInBlur = () => {
    setIsEditingLinkedIn(false);
  };

  const renderLinkedIn = () => {
    if (isEditingLinkedIn) {
      return (
        <input
          type="text"
          value={editedLinkedIn}
          onClick={handleLinkedInClick}
          onChange={handleLinkedInChange}
          onBlur={handleLinkedInBlur}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleLinkedInBlur();
            } else if (e.key === 'Escape') {
              setEditedLinkedIn(user.LinkedIn); 
              handleLinkedInBlur(); // Remove parentheses here
            }
          }}
          autoFocus
          style={{
            height: "50px",
            width: "100%",
            border: "1px solid #ccc", 
          }}
        />
      );
    } else {
      return (
        <p className='para' onClick={handleLinkedInClick}>
          {editedLinkedIn}
        </p>
      );
    }
  };
  ///////////////////////////////
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [editedAddress, setEditedAddress] = useState(user.Address);

  const handleAddressClick = () => {
    setIsEditingAddress(true);
  };

  const handleAddressChange = (e) => {
    setEditedAddress(e.target.value);
  };

  const handleAddressBlur = () => {
    setIsEditingAddress(false);
  };

  const renderAddress = () => {
    if (isEditingAddress) {
      return (
        <input
          type="text"
          value={editedAddress}
          onClick={handleAddressClick}
          onChange={handleAddressChange}
          onBlur={handleAddressBlur}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleAddressBlur();
            } else if (e.key === 'Escape') {
              setEditedAddress(user.Address); 
              handleAddressBlur(); // Remove parentheses here
            }
          }}
          autoFocus
          style={{
            height: "50px",
            width: "100%",
            border: "1px solid #ccc", 
          }}
        />
      );
    } else {
      return (
        <p className='para' onClick={handleAddressClick}>
          {editedAddress}
        </p>
      );
    }
  };

  ////////////////////
  ////////////EDUCATION
  //////////

  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [editedEducation, setEditedEducation] = useState(user.education[0].EduDes);

  const handleEducationClick = () => {
    setIsEditingEducation(true);
  };

  const handleEducationChange = (e) => {
    setEditedEducation(e.target.value);
  };

  const handleEducationBlur = () => {
    setIsEditingEducation(false);
  };

  const renderEducation = () => {
    if (isEditingEducation) {
      return (
        <input
          type="text"
          value={editedEducation}
          onClick={handleEducationClick}
          onChange={handleEducationChange}
          onBlur={handleEducationBlur}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleEducationBlur();
            } else if (e.key === 'Escape') {
              setEditedEducation(user.education[0].EduDes); 
              handleEducationBlur();
            }
          }}
          autoFocus
          style={{
            height: "30px",
            width: "100%",
            border: "1px solid #ccc", 
          }}
        />
      );
    } else {
      return (
        <p className='para' onClick={handleEducationClick}>
          {editedEducation}
        </p>
      );
    }
  };

  ///////

  //////

  //////

  ///////

  //////

  //////
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  const params = useParams();
  
  const onFinish = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/template', {
        _id: user._id,
        Firstname: editedFirstName,
        Lastname: editedLastName,
        Objective: editedObjective,
        Email: editedEmail,
        Mobilenumber: editedMobilenumber,
        LinkedIn: editedLinkedIn,
        Address: editedAddress,
      });
        localStorage.setItem('resume-user', JSON.stringify(response.data));
        message.success('update successful')
    } catch (error) {
      
      message.error('update failed'); 
     
    }
  };
  

  console.log(editedEducationDescriptions)

  const getTemplate = () => {
    switch (params.id) {
      case '1': {
        return <Template1 renderFirstName={renderFirstName} renderLastName={renderLastName} renderObjective={renderObjective} renderEmail={renderEmail}  renderMobilenumber={renderMobilenumber} renderLinkedIn={renderLinkedIn} renderAddress={renderAddress}/>
      }
      case '2': {
        return <Template2 renderFirstName={renderFirstName} renderLastName={renderLastName} renderObjective={renderObjective} renderEmail={renderEmail}  renderMobilenumber={renderMobilenumber} renderLinkedIn={renderLinkedIn} renderAddress={renderAddress}/>
      }
      case '3': {
        return <Template3 renderFirstName={renderFirstName} renderLastName={renderLastName} renderObjective={renderObjective}/>
      }
      case '4': {
        return <Template4 />
      }
      case '5': {
        return <Template5 />
      }
      case '6': {
        return <Template6 />
      }
      case '7': {
        return <Templatenew />
      }
      case '8': {
        return <Template8 />
      }
    }
  }
  return (
    <DefaultLayout>
      <div className='template'>
        <div className='d-flex justify-content-end my-5 mx-5'>
          <Link to={'/template'}><button className='backBtn' >Back</button></Link>
          <button className='print mx-5' onClick={handlePrint}>Print</button>
          <button className='print mx-5' onClick={onFinish}>Update</button>
          
        </div>
        <div ref={componentRef}>
          {getTemplate()}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Template