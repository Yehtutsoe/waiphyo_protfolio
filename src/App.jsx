import React from 'react';
import Navbar from './components/Navbar';
import ProfileTabs from './components/ProfileTabs';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ResumeCertificates from './components/ResumeCertificates';

function App() {
  return (
    <>
      <Navbar />
      <ProfileTabs />
      <About />
      <Experience />
      <ResumeCertificates />
      <Contact />
    </>
  );
}

export default App;