import React from 'react'
import '../../resources/templatecss/template2.css'
import EducationSection from './editor/Education'
import ExperienceSection from './editor/Experience'
import ProjectSection from './editor/Projects'
import skillsSection from './editor/Skills'
import CertificationSection from './editor/Certificate';
const Template2 = ({ renderFirstName, renderLastName, renderObjective, renderEmail, renderMobilenumber, renderLinkedIn, renderAddress }) => {
    const user = JSON.parse(localStorage.getItem('resume-user'))


    return (
        <section className='resume__2'>
            <div className='template2-parent'>
                <main className="main-content">
                    <section className="left-section">
                        <div className="left-content">
                            <div className="profile">
                                <div className="imageres">
                                    <img src={`http://localhost:5000/uploads/${user.photo}`} alt="picture" className='imageres1' />
                                </div>
                                <h2 className="name1">{renderFirstName()}{renderLastName()}</h2>
                                <p className="career">{user.Role}</p>
                            </div>
                            <div className="contact-info" style={{ marginTop: "50px" }}>
                                <h3 className="main-title">Contact Info</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        {renderMobilenumber()}
                                    </li>
                                    <li>
                                        <i className="fa fa-fax"></i>
                                        {renderEmail()}
                                    </li>
                                    <li>
                                        <i className="fa fa-globe"></i>
                                        {renderLinkedIn()}
                                    </li>

                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        {renderAddress()}
                                    </li>
                                </ul>
                            </div>
                            <div className="skills-section" style={{ marginTop: "80px" }}>
                                <h3 className="main-title">Skills</h3>
                                <ul>

                                    {user.skills.map((skill) => {
                                        return <li style={{ breakInside: "avoid" }}>
                                            <p className="skill-title">{skill.Technology}</p>
                                            <div className="progress-bar">
                                                <p>{skill.Rating}</p>
                                            </div>
                                        </li>
                                    })}
                                    {/* ... Other skill items ... */}
                                </ul>
                                <br />
                                <br />
                                <br />
                                <div className="interest11 " style={{ breakInside: 'avoid' }}>
                                    <h3 className="main-title" style={{ marginTop: "10px", display: 'flex!important' }}>Hobbies</h3>
                                    <div className="interest_items11">
                                        {
                                            user.Interest.map((int) => {
                                                return (
                                                    <div style={{ color: 'white', fontSize: 17, breakInside: "avoid" }} >
                                                        {int.Interest}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="certification11" style={{ marginTop: "100px", }}>
                                <h3 className="main-title">certification</h3>
                                <div className="certification__item11">
                                    <CertificationSection user={user} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="right-section">
                        <div className="right-main-content">
                            <section className="about sect">
                                <h2 className="right-title">About Me</h2>
                                <p className="para">
                                    {renderObjective()}
                                </p>
                            </section>

                            <section className="experince sect">
                                <h2 className="right-title">Experience</h2>
                                <ExperienceSection user={user} />

                            </section>

                            <section className="education sect">
                                <h2 className="right-title">education</h2>
                                {/* {user.education.slice(0, 3).map((edu) => {
                                return <div className="timeline" style={{ breakInside: "avoid" }}>
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">{edu.Institution}</h5>
                                        <p className="para">YEARS : {edu.YearRange}</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">{edu.Qualification} Percentage : {edu.Percentage}</h5>
                                            <p className="para">
                                                {edu.EduDes}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            })} */}
                                <EducationSection user={user} />

                            </section>
                            <section className="awards sect" style={{ breakInside: 'avoid' }}>
                                <h2 className="right-title" style={{ breakInside: 'avoid' }}>Projects</h2>
                                <ProjectSection user={user} />


                            </section>
                        </div>
                    </section>
                </main>




            </div>
        </section>
    )
}

export default Template2;