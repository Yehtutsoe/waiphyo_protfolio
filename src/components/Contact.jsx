import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="my-5">
      <Container>
        <Card className="shadow-sm border-0">
          <Card.Body>
            <h2 className="text-center mb-4">Contact Me</h2>

            <Row className="justify-content-center">
              <Col md={6} className="text-center">
                <p className="lead">I'm happy to connect with you. Please feel free to reach out.</p>

                <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center gap-3 mt-4">
                  <Button variant="primary" size="lg" href="tel:+959265007140">
                    📞 Call Me
                  </Button>
                  <Button variant="outline-secondary" size="lg" href="mailto:www.waiphyo222@gmail.com">
                    ✉️ Send Email
                  </Button>
                  <Button variant="success" size="lg" href="https://wa.me/959265007140" target="_blank">
                    💬 WhatsApp
                  </Button>
                  <Button variant="info" size="lg" href="https://t.me/waiphyo" target="_blank">
                    📨 Telegram
                  </Button>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center mt-5">
              <Col md={8}>
                <h4 className="text-center mb-4">Or Send Me a Message</h4>

                {/* ✅ FormSubmit Integration */}
                <Form
                  action="https://formsubmit.co/www.waiphyo222@gmail.com"
                  method="POST"
                >
                  {/* Hidden anti-spam field */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />

                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="you@example.com" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={4} placeholder="Write your message..." />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      ✅ Send Message
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
