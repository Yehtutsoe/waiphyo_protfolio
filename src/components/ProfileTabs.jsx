import React from 'react';
import { Container, Tab, Nav, Card, Row, Col, Badge } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg';
import './ProfileTabs.css';

const ProfileTabs = () => (
  <section id="profile" className="my-5 py-4">
    <Container>
      {/* ပိုမိုကြီးမားပြီး Premium ဆန်တဲ့ Main Card ကြီးအဖြစ် ပြောင်းလဲလိုက်ပါတယ် */}
      <Card className="shadow-lg border-0 rounded-4 overflow-hidden bg-white">
        <Row className="g-0">
          
          {/* 🟦 ဘယ်ဘက်ခြမ်း - Profile Hero Section (ပုံအကြီးကြီးနှင့် အဓိကအချက်အလက်) */}
          <Col lg={5} className="bg-primary text-white p-5 d-flex flex-column justify-content-center align-items-center text-center position-relative">
            {/* နောက်ခံ အလှဆင်လိုင်းများ (Optional) */}
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10 bg-grid"></div>
            
            <div className="profile-image-container position-relative mb-4">
              <img
                alt="Wai Phyo"
                src={profileImage}
                style={{
                  width: '240px',   // ပုံကို ၂၄၀ ပစ်ဆယ်အထိ အကြီးကြီး ချဲ့ပေးထားပါတယ်
                  height: '240px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '8px solid rgba(255, 255, 255, 0.2)', // ပိုသိသာတဲ့ အနားသတ်လိုင်း
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                  backgroundColor: '#fff'
                }}
              />
              <Badge bg="success" className="position-absolute bottom-0 end-0 px-3 py-2 rounded-pill fs-6 border border-white border-3 shadow">
                Active Now
              </Badge>
            </div>

            <h1 className="fw-bold mb-2 text-white display-6">Wai Phyo</h1>
            <p className="fs-5 text-white-50 mb-3 fw-medium">Senior Officer</p>
            
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              <Badge bg="light" className="text-primary px-3 py-2 rounded-pill fs-6 fw-semibold">
                🏦 Myanma Apex Bank
              </Badge>
              <Badge bg="warning" className="text-dark px-3 py-2 rounded-pill fs-6 fw-semibold">
                ⏱️ Since 2014
              </Badge>
            </div>
          </Col>

          {/* ⬜ ညာဘက်ခြမ်း - Detailed Tabs & Content (အကျယ်ကြီး ဖြစ်သွားပါပြီ) */}
          <Col lg={7} className="p-4 p-md-5 d-flex flex-column justify-content-center">
            <Tab.Container defaultActiveKey="profile">
              
              {/* Modern & Large Nav Pills */}
              <Nav variant="pills" className="custom-nav-pills p-2 bg-light rounded-3 mb-4 shadow-sm">
                <Nav.Item className="w-50">
                  <Nav.Link eventKey="profile" className="rounded-3 py-3 text-center fw-bold fs-5">
                    <i className="bi bi-person-lines-fill me-2"></i>Professional Bio
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="w-50">
                  <Nav.Link eventKey="social" className="rounded-3 py-3 text-center fw-bold fs-5">
                    <i className="bi bi-chat-square-heart-fill me-2"></i>Social Connect
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {/* Tab Contents */}
              <Tab.Content>
                {/* ၁။ Profile Content */}
                <Tab.Pane eventKey="profile">
                  <div className="animate-fade-in">
                    <h3 className="fw-bold text-dark mb-3 border-bottom pb-2">About My Career</h3>
                    <p className="text-secondary lead mb-4" style={{ lineHeight: '1.7' }}>
                      Dedicated banking professional with over a decade of hands-on experience in financial operations. 
                      Specialized in cash management and branch administration, ensuring efficiency and institutional integrity.
                    </p>
                    
                    <div className="p-4 bg-light rounded-4 border-start border-primary border-5 mb-3 shadow-sm">
                      <h5 className="fw-bold text-primary mb-2">Current Designation</h5>
                      <p className="fs-5 fw-bold text-dark mb-1">Cash In-charge</p>
                      <p className="text-muted mb-0">Senior Officer Level | Corporate Operations</p>
                    </div>
                  </div>
                </Tab.Pane>
                
                {/* ၂။ Social Content */}
                <Tab.Pane eventKey="social">
                  <div className="animate-fade-in">
                    <h3 className="fw-bold text-dark mb-3 border-bottom pb-2">Network Channels</h3>
                    <p className="text-muted mb-4">Let's stay connected. Feel free to explore my professional networks and social platforms.</p>
                    
                    <div className="d-flex flex-column gap-3">
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-outline-primary d-flex align-items-center justify-content-between p-3 rounded-3 shadow-sm transition-link"
                      >
                        <span className="fs-5 fw-semibold"><i className="bi bi-linkedin me-3 text-primary fs-4"></i>LinkedIn Network</span>
                        <i className="bi bi-chevron-right fs-5 text-muted"></i>
                      </a>
                      
                      <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-outline-dark d-flex align-items-center justify-content-between p-3 rounded-3 shadow-sm transition-link"
                      >
                        <span className="fs-5 fw-semibold"><i className="bi bi-facebook me-3 text-primary fs-4"></i>Facebook Profile</span>
                        <i className="bi bi-chevron-right fs-5 text-muted"></i>
                      </a>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>

            </Tab.Container>
          </Col>

        </Row>
      </Card>
    </Container>
  </section>
);

export default ProfileTabs;