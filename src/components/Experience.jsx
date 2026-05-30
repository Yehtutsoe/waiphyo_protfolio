import React from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';

const Experience = () => {
  // အချက်အလက်များကို ပိုမိုသန့်ရှင်းအောင် array အနေနဲ့ ခွဲထုတ်ထားပါတယ်
  const experiences = [
    {
      title: "Cash Department",
      company: "Myanma Apex Bank",
      duration: "2023 - Present",
      isCurrent: true
    },
    {
      title: "Deputy Branch Manager (Agency Banking)",
      company: "Myanma Apex Bank",
      duration: "2022 - 2023",
      isCurrent: false
    },
    {
      title: "Reception & Remittance", // ကာလတူနေလို့ တစ်ပေါင်းတည်း လုပ်ပေးထားပါတယ်
      company: "Myanma Apex Bank",
      duration: "2018 - 2022",
      isCurrent: false
    },
    {
      title: "Admin Department",
      company: "Myanma Apex Bank",
      duration: "2016 - 2018",
      isCurrent: false
    },
    {
      title: "Cash Department",
      company: "Myanma Apex Bank",
      duration: "2014 - 2016",
      isCurrent: false
    }
  ];

  const coreSkills = [
    "Customer Service",
    "Mobile Banking Department",
    "ATM Services and Maintenance"
  ];

  return (
    <section id="experience" className="my-5">
      <Container>
        <Card className="shadow-sm border-0 bg-light">
          <Card.Body className="p-4">
            <h2 className="text-primary mb-4 fw-bold border-bottom pb-2">
              Working Experiences
            </h2>
            
            {/* လုပ်ငန်းအတွေ့အကြုံများအပိုင်း */}
            <div className="experience-timeline mb-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="mb-3 border-0 shadow-sm custom-card">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col md={8}>
                        <h5 className="fw-bold mb-1 text-dark">{exp.title}</h5>
                        <p className="text-muted mb-0">{exp.company}</p>
                      </Col>
                      <Col md={4} className="text-md-end mt-2 mt-md-0">
                        <Badge bg={exp.isCurrent ? "success" : "secondary"} className="px-3 py-2 text-wrap">
                          {exp.duration}
                        </Badge>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>

            {/* ကျွမ်းကျင်မှုနှင့် အခြားတာဝန်ယူခဲ့သော အပိုင်းများ */}
            <h4 className="text-secondary mt-4 mb-3 fw-semibold">Core Expertise & Services</h4>
            <div className="d-flex flex-wrap gap-2">
              {coreSkills.map((skill, index) => (
                <Badge key={index} bg="info" className="text-dark p-2 fs-6 fw-normal shadow-sm">
                  {skill}
                </Badge>
              ))}
            </div>

          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Experience;