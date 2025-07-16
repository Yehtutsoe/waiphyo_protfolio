import React from "react";
import { Container, Card, Button, Carousel } from "react-bootstrap";
import resumePDF from "../assets/resume.pdf";

// ✅ Import all certificates directly
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";


// ✅ Put them in an array
const certificateImages = [
  cert1, cert2, cert3, cert4,
  cert5
];

const ResumeCertificates = () => (
  <section id="resume" className="my-5">
    <Container>
      <Card className="shadow-sm mb-5">
        <Card.Body>
          <h2>Resume</h2>
          <Button variant="primary" className="me-3" href={resumePDF} download>
            Download Resume
          </Button>
          <Button variant="outline-secondary" href={resumePDF} target="_blank">
            View Resume
          </Button>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <h2>Certificates</h2>
          <Carousel>
            {certificateImages.map((img, idx) => (
              <Carousel.Item key={idx} className="carousel-3d-item">
                <img
                  className="d-block w-100 cert-img"
                  src={img}
                  alt={`Certificate ${idx + 1}`}
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Card.Body>
      </Card>
    </Container>
  </section>
);

export default ResumeCertificates;
