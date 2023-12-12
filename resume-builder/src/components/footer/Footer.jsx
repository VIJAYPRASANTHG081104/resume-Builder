import React from 'react'
import './footer.css'
import { Input, Form, Button } from 'antd'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO.png'
const { TextArea } = Input
function footer() {
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
  const quick__links = [
    // {
    //   path: '#',
    //   display: 'Arvind Vikram'
    // },
    // {
    //   path: '#',
    //   display: 'Vijayprasanth'
    // },
    {
      path: '#',
      display: 'Mavericks'
    }

  ];
  const quick__links2 = [
    {
      path: '#',
      display: 'Home'
    },
    {
      path: '#',
      display: 'About'
    },
    {
      path: '#',
      display: 'contact'
    }

  ]
  return (
    <footer className='footer'>

      <Container className='foot__contain'>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt='' />
              <p>Empower your career with our resume builder</p>
              <div className='social__links d-flex align-items-center gap-4'>
                <span>
                  <Link to='#'><i class="fa-brands fa-youtube"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="fa-brands fa-instagram"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="fa-brands fa-square-facebook"></i></Link>
                </span>
              </div>
            </div>

          </Col>
          <Col lg='3' className='footer__1'>
            <h5 className='footer__link-title'>Made By</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Follow us</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <div className="form" >
        <div>
          <h1 className='formH1'>Hello,<span>you can give your</span><span>feedback here!</span></h1>
        </div>
        <form id="contactform" action="https://formsubmit.co/vijayprasanth.cb22@bitsathy.ac.in" method="POST">
          <div className="inputbox" id="message2">
            <input type="email" name="name" required id="message"
            rules={[
              { required: true, message: 'Please input your email' },
              {
                pattern: emailRegex,
                message: 'Please enter a valid email address',
              },
            ]} />
            <span id="span2">Email</span>
          </div>
          <br></br>
          <br></br>
          <div className="inputbox" id="message">
            <textarea type="textbox" name="Message" required id="message1" />
            <span id="span1">message</span>
          </div>
          <div className="subbtn">
            <button id="btn" type="submit">send</button>
          </div>
        </form>
      </div>
    </footer>
  )
}

export default footer