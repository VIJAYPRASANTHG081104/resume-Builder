import React from 'react'
import '../../resources/templatecss/template4.css'
const Template4 = () => {
  const user = JSON.parse(localStorage.getItem('resume-user'))
  return (
    <div className="container1">
      <div className="profile">
        <div className="profile_container1">
          <div className="profile_profileImg1">
            <img src={`http://localhost:5000/uploads/${user.photo}`} alt="" id='img4' />
          </div>
          <div>
            <h1 className="profile_name">
              <span className="profile_name_firstName">{user.Firstname}</span>
              <span className="profile_name_lastName">{user.Lastname}</span>
            </h1>
            <p className="profile_title">{user.Portfolio}</p>
            <p className="description profile_description">
              {user.Objective}
            </p>
          </div>
        </div>
      </div>
      <div className="group-1">
        <div className="skills">
          <h3 className="title" style={{ marginTop: "10px" }}>Expertise</h3>
          <ul className="skills_list description">
            {user.skills.map((skill) => {
              return <div className='display44' style={{ breakInside: "avoid" }}><li>
                {skill.Technology}
              </li></div>
            })}
          </ul>
        </div>


        <div className="edu">
          <h3 className="title" style={{ marginTop: "10px" }}>Education</h3>
          {user.education.map((edu) => {
            return <div className="edu_item display44" style={{ breakInside: "avoid" }}>

              <h4 className="item_title">{edu.Qualification} <p className="item_preTitle">{edu.YearRange}</p></h4>
              <p className="item_subtitle">
                {edu.Institution}
              </p>
            </div>

          })}
        </div>
        <br/>
        <br/>
        <br/>
        <div className="certification" >
          <h3 className="title" style={{ marginTop: "10px" }}>certification</h3>
          <div className="certification_item">
            {
              user.Certification.slice(0, 3).map((cer) => {
                return (
                  <div>
                    <p className="item_preTitle">{cer.YearRange}</p>
                    <h4 className="item_title">{cer.TitleofCertification}</h4>
                    <p className="description">
                      {cer.Description}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="interest">
          <h3 className="title" style={{ marginTop: "10px" }}>Interest</h3>

          <div className="interest_items">
            <div className="interest_item">
              {user.Interest.map((Interest) => {
                return <span className='display44' style={{ color: "white" }}>{Interest.Interest}</span>

              })}

            </div>

          </div>

        </div>
        <div className="contact">
          <h3 className="title" style={{ marginTop: "10px" }}>Contact</h3>
          <div className="contact_info">
            <p className="description">
              {user.Address} ,<br/> 
              {user.city} ,
              <br/> 
              {user.state} ,
              <br/> 
              {user.country}
              <br/> 
            </p>
          </div>
        </div>
        <div className="social" >
            <h3 className="title" style={{ marginTop: "10px" }}>Socials</h3>
            <div className="social_items">
            <p className="description">
              {user.LinkedIn}
            </p>
              <p className="description">
              {user.Mobilenumber}
            </p>
            <p className="description">
              {user.Email}
            </p>
            </div>
          </div>
      </div>
      <div className="group-2">
        <div className="exp">
          <h3 className="title" style={{ marginTop: "10px" }} >Experience</h3>
          {user.Experience.map((exp) => {
            return <div className="exp_item display44" >
              <p className="item_preTitle">{exp.YearRange}</p>
              <h4 className="item_title">{exp.Company}</h4>
              <p className="item_subtitle">{exp.jobRole}</p>
              <p className="description">
                {exp.Rolework}
              </p>
            </div>
          })}

        </div>
        <div className="awards">
          <h3 className="title">PROJECTS</h3>
          {user.Projects.map((pro) => {
            return <div className="awards_item display44" style={{ breakInside: "avoid" }}>
              <p className="item_preTitle">{pro.YearRange}</p>
              <h4 className="item_title">{pro.Title}</h4>
              <p className=" description">
                {pro.Description}
              </p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Template4;