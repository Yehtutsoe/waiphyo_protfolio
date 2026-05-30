import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Navigation.css'; // အောက်က CSS တွေကို ဒီဖိုင်ထဲ ထည့်ပေးရပါမယ်

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  // စာမျက်နှာကို Scroll ဆွဲလိုက်ရင် Navbar ရဲ့ နောက်ခံပုံစံ ပြောင်းလဲဖို့ ဖြစ်ပါတယ်
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" // အပေါ်မှာ အမြဲကပ်နေစေရန်
      className={`custom-navbar py-3 ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        {/* Brand Logo အား စာလုံးအထူနှင့် အလှဆင်ခြင်း */}
        <Navbar.Brand href="#profile" className="fw-bold fs-4 text-primary logo-text">
          WAI<span className="text-dark">PHYO</span>
        </Navbar.Brand>
        
        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0 shadow-none">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        {/* Menu Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-2 text-center mt-3 mt-lg-0">
            <Nav.Link href="#profile" className="nav-item-link px-3 py-2 fw-semibold">Profile</Nav.Link>
            <Nav.Link href="#experience" className="nav-item-link px-3 py-2 fw-semibold">Experience</Nav.Link>
            <Nav.Link href="#resume" className="nav-item-link px-3 py-2 fw-semibold">Certificates</Nav.Link>
            
            {/* Contact ခလုတ်လေးကို ပိုပေါ်လွင်အောင် Button ပုံစံ လုပ်ထားပါတယ် */}
            <Nav.Link 
              href="#contact" 
              className="nav-contact-btn px-4 py-2 ms-lg-2 fw-semibold rounded-pill text-white bg-primary shadow-sm"
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;