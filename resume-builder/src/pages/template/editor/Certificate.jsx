import React, { useState } from 'react';
import axios from 'axios'
import { message } from 'antd';

const CertificationSection = ({ user }) => {
    const user1 = JSON.parse(localStorage.getItem('resume-user'));
    const [editedCertificationDescriptions, setEditedCertificationDescriptions] = useState(
        user.Certification.map((edu) => edu.Description)
    );
    const [isEditingCertificationDescriptions, setIsEditingCertificationDescriptions] = useState(
        new Array(user.Certification.length).fill(false)
    );

    const handleEditClick = (index) => {
        const newEditingState = [...isEditingCertificationDescriptions];
        newEditingState[index] = true;
        setIsEditingCertificationDescriptions(newEditingState);
    };

    const handleSaveClick = async (index) => {
        const newDescriptions = [...editedCertificationDescriptions];
        setIsEditingCertificationDescriptions(new Array(user.Certification.length).fill(false));
        try {
            const response = await axios.post('http://localhost:5000/api/user/template5', { Certification: editedCertificationDescriptions, _id: user1._id });
            console.log(response)
            localStorage.setItem('resume-user', JSON.stringify(response.data));
            message.success('update successful')
        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <section className="Certification sect">

            {user.Certification.slice(0, 3).map((edu, index) => (
                <div className="timeline" style={{ breakInside: "avoid" }} key={index}>
                    <div className="left-tl-content">
                        <h5 className="item__title11">{edu.TitleofCertification}</h5>
                        <p className="item__preTitle11">YEARS: {edu.YearRange}</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">
                                {isEditingCertificationDescriptions[index] ? (
                                    <textarea
                                        type="text"
                                        value={editedCertificationDescriptions[index]}
                                        onChange={(e) => {
                                            const newDescriptions = [...editedCertificationDescriptions];
                                            newDescriptions[index] = e.target.value;
                                            setEditedCertificationDescriptions(newDescriptions);

                                        }}
                                        style={{ width: "100%" }}
                                    />
                                ) : (
                                    <>
                                        {edu.Qualification}
                                    </>
                                )}
                            </h5>
                            <p className="para">
                                {isEditingCertificationDescriptions[index] ? (
                                    <>
                                        <button onClick={() => handleSaveClick(index)}>Save</button>
                                    </>
                                ) : (
                                    <span
                                        onClick={() => {
                                            handleEditClick(index);
                                        }}
                                    >

                                        {editedCertificationDescriptions[index]}
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

export default CertificationSection;