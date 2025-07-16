import React from 'react';
import { Container, Tab, Nav, Row, Col, Card } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg';
import './ProfileTabs.css';

const ProfileTabs = () => (
  <section id="profile" className="my-5">
    <Container className="text-center">
      <div className="profile-image-container">
         <img
          alt="Wai Phyo"
          src={profileImage}
          style={{
            width: '200px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '5px solid white',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
      <Tab.Container defaultActiveKey="profile">
        <Nav variant="tabs" className="justify-content-center mt-4">
          <Nav.Item>
            <Nav.Link eventKey="profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="social">Social</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="mt-3">
          <Tab.Pane eventKey="profile">
            <Card className="shadow-sm">
              <Card.Body>
                <p><strong>Cash Incharges</strong> at Myanma Apex Bank</p>
                <p>Joined in 2014, currently Senior Officer level</p>
              </Card.Body>
            </Card>
          </Tab.Pane>
          <Tab.Pane eventKey="social">
            <Card className="shadow-sm">
              <Card.Body>
                <p><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></p>
                <p><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></p>
              </Card.Body>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  </section>
);

export default ProfileTabs