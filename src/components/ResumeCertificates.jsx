import React, { useState } from "react";
import { Container, Card, Button, Row, Col, Modal } from "react-bootstrap";
import resumePDF from "../assets/resume.pdf";

// ✅ Import Certificates & Documents
import cert1 from "../assets/bechalor.jpg";
import cert2 from "../assets/eaindaungsu.jpg";
import cert3 from "../assets/Certificate.jpg";
import cert4 from "../assets/Cerfificate2.jpg";
import cert5 from "../assets/cert5.jpg";

const ResumeCertificates = () => {
  // Modal Popup အလုပ်လုပ်ဖို့အတွက် State များ သတ်မှတ်ခြင်း
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  // ပုံကို နှိပ်လိုက်ရင် Modal ဖွင့်ပေးမည့် Function
  const handlePreview = (src, title) => {
    setSelectedImg(src);
    setSelectedTitle(title);
    setShowModal(true);
  };

  const officialDocs = [
    { src: cert1, title: "Bachelor Degree" },
    { src: cert2, title: "Household Registration" },
  ];

  const professionalCerts = [
    { src: cert3, title: "Professional Certificate I" },
    { src: cert4, title: "Professional Certificate II" },
    { src: cert5, title: "Specialized Training Course" },
  ];

  return (
    <section id="resume" className="my-5">
      <Container>
        {/* === Resume Section === */}
        <Card className="shadow-sm mb-5 border-0 bg-light">
          <Card.Body className="p-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <div>
              <h2 className="fw-bold text-primary mb-1">Resume / CV</h2>
              <p className="text-muted mb-0">My latest professional resume and background statement.</p>
            </div>
            <div className="d-flex gap-2">
              <Button variant="primary" className="px-4 py-2 shadow-sm" href={resumePDF} download>
                <i className="bi bi-download me-2"></i>Download Resume
              </Button>
              <Button variant="outline-primary" className="px-4 py-2" href={resumePDF} target="_blank">
                View Resume
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* === Certificates & Documents Section === */}
        <div className="mb-4">
          <h2 className="fw-bold text-dark border-bottom pb-2 mb-4">Credentials & Certifications</h2>
          
          {/* ၁။ ဘွဲ့နှင့် တရားဝင်အထောက်အထားများ */}
          <h4 className="text-secondary mb-3 fw-semibold">Education & Official Documents</h4>
          <Row className="g-4 mb-5">
            {officialDocs.map((doc, idx) => (
              <Col xs={12} sm={6} md={4} lg={3} key={`doc-${idx}`}>
                {/* နှိပ်လို့ရမှန်းသိအောင် style={{ cursor: 'pointer' }} ထည့်ထားပါတယ် */}
                <Card 
                  className="h-100 shadow-sm border-0 cert-card" 
                  onClick={() => handlePreview(doc.src, doc.title)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="overflow-hidden bg-dark d-flex align-items-center justify-content-center position-relative view-overlay" style={{ height: "240px" }}>
                    <img
                      className="w-100 h-100 img-hover-zoom"
                      src={doc.src}
                      alt={doc.title}
                      style={{ objectFit: "cover" }}
                    />
                    {/* ပုံပေါ် Mouse တင်ရင် 'Click to View' စာသားလေး ပေါ်လာစေရန် */}
                    <div className="preview-badge position-absolute text-white fw-medium px-3 py-1 rounded-pill bg-dark bg-opacity-70">
                      <i className="bi bi-eye me-1"></i> Preview
                    </div>
                  </div>
                  <Card.Body className="p-3 text-center">
                    <Card.Title className="fs-6 fw-bold mb-0 text-truncate">{doc.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* ၂။ သင်တန်းဆင်းလက်မှတ်များ */}
          <h4 className="text-secondary mb-3 fw-semibold">Professional Certificates</h4>
          <Row className="g-4">
            {professionalCerts.map((cert, idx) => (
              <Col xs={12} sm={6} md={4} lg={3} key={`cert-${idx}`}>
                <Card 
                  className="h-100 shadow-sm border-0 cert-card" 
                  onClick={() => handlePreview(cert.src, cert.title)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="overflow-hidden bg-dark d-flex align-items-center justify-content-center position-relative view-overlay" style={{ height: "240px" }}>
                    <img
                      className="w-100 h-100 img-hover-zoom"
                      src={cert.src}
                      alt={cert.title}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="preview-badge position-absolute text-white fw-medium px-3 py-1 rounded-pill bg-dark bg-opacity-70">
                      <i className="bi bi-eye me-1"></i> Preview
                    </div>
                  </div>
                  <Card.Body className="p-3 text-center">
                    <Card.Title className="fs-6 fw-bold mb-0 text-truncate">{cert.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* ======================================================== */}
        {/* 🖼️ Bootstrap Modal for Image Preview (Popup Preview Box) */}
        {/* ======================================================== */}
        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)} 
          centered 
          size="lg"
          contentClassName="bg-transparent border-0 shadow-none" // Modal Background ကို ဖျောက်ပြီး ပုံသီးသန့် လှလှပပ ပြရန်
        >
          <Modal.Header closeButton closeVariant="white" className="border-0 px-2 pb-0">
            <Modal.Title className="text-white fs-5 fw-bold">{selectedTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center p-0 mt-2">
            <img 
              src={selectedImg} 
              alt={selectedTitle} 
              className="img-fluid rounded-3 shadow-lg" 
              style={{ maxHeight: "85vh", objectFit: "contain", border: "4px solid white" }}
            />
          </Modal.Body>
        </Modal>

      </Container>
    </section>
  );
};

export default ResumeCertificates;