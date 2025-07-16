import React from 'react';
import { Container, Card } from 'react-bootstrap';

const About = () => (
  <section id="about" className="my-5">
    <Container>
      <Card className="shadow-sm">
        <Card.Body>
          <h2>About Me</h2>
          <p>
            My name is <strong>Wai Phyo(Senior Officer)</strong>. I have been working at <strong>Myanma Apex Bank</strong>
            since 2014 to the present. My current position is <strong>Cash Department(Cash Incharges)</strong>.
          </p>
        </Card.Body>
      </Card>
    </Container>
  </section>
);

export default About;