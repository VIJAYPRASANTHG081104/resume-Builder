import React from 'react'
import '../../resources/templatecss/template8.css'
import paperclip from '../template/images/paper-clip.png'
const Template8 = () => {
    const user = JSON.parse(localStorage.getItem('resume-user'))
    return (
        <div className='template7'>
            <div id="page-wrap77">

                <div class="poloroid77">
                    <img src={`http://localhost:5000/uploads/${user.photo}`} alt="Photo of Michael Hill" id="pic" />
                    <img src={paperclip} alt="image of a paperclip" id="pclip" />
                </div>

                <div id="contact-info77" class="vcard77">
                    <h1 class="fn77">{user.Firstname} {user.Lastname}</h1>

                    <p>
                        Cell: <span class="tel77">{user.Mobilenumber}</span><br />
                        Email: {user.Email}<br />
                        LinkedIn: {user.LinkedIn}
                        <br/>
                        Address: {user.Address},{user.city},{user.country}
                    </p>
                </div>

                <div id="objective77">
                    <p>{user.Objective}</p>
                </div>

                <div class="clear77"></div>

                <dl>
                    <dd class="clear77"></dd>

                    <dt>Experience</dt>
                    <dd>
                        {
                            user.Experience.slice(0, 3).map((exp) => {
                                return (
                                    <div className='print77'>
                                        <h2>{exp.Company}<span>{exp.jobRole} - {exp.Place} - {exp.YearRange}</span></h2>
                                        <ul>
                                            <li>{exp.Rolework}</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </dd>

                    <dd class="clear77"></dd>

                    <dt>Skills</dt>
                    <dd>
                        {
                            user.skills.slice(0, 3).map((skill) => {
                                return (
                                    <div className='print77'>
                                        <h2>{skill.Technology}</h2>
                                        <p>{skill.Rating}/10</p>
                                    </div>
                                )
                            })
                        }
                    </dd>

                    <dd class="clear77"></dd>

                    <dt>Education</dt>
                    <dd>
                        {
                            user.education.slice(0,3).map((edu)=>{
                                return(
                                    <div className='print77'>
                                        <h2>{edu.Qualification} - {edu.Institution}<span>{edu.Percentage}% - {edu.YearRange}</span></h2>
                                        <p>{edu.EduDes}</p>
                                    </div>
                                )
                            })
                        }
                    </dd>

                    <dd class="clear77"></dd>

                    <dt>Certification</dt>
                    <dd>
                        {
                            user.Certification.slice(0, 3).map((cer) => {
                                return (
                                    <div className='print77'>
                                        <h2>{cer.TitleofCertification}<span>{cer.YearRange}</span></h2>
                                        <ul>
                                            <li>{cer.Description}</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </dd>

                    <dd class="clear77"></dd>

                    <dt>Projects</dt>
                    <dd>
                        {
                            user.Projects.slice(0, 3).map((pro) => {
                                return (
                                    <div className='print77'>
                                        <h2>{pro.Title}<span>{pro.YearRange}</span></h2>
                                        <ul>
                                            <li>{pro.Description}</li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </dd>
                    

                </dl>

                <div class="clear77"></div>
            </div>

        </div>
    )
}

export default Template8