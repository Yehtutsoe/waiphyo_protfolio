import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="my-5">
      <Container>
        {/* ခေါင်းစဉ်ကို ကတ်အပြင်ဘက်မှာ အလယ်ဗဟို ထားပေးလိုက်ပါတယ် */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Get In Touch</h2>
          <p className="text-muted lead">I'm happy to connect with you. Please feel free to reach out.</p>
        </div>

        {/* 2-Column Split Layout သုံးထားတဲ့ Main Card */}
        <Card className="shadow border-0 rounded-4 overflow-hidden">
          <Row className="g-0">
            
            {/* 🟦 ဘယ်ဘက်ခြမ်း - Contact Info & Social Buttons */}
            <Col lg={5} className="bg-primary text-white p-4 p-md-5 d-flex flex-column justify-content-between">
              <div>
                <h4 className="fw-bold mb-3 text-white">Contact Information</h4>
                <p className="text-white-50 mb-4">
                  Fill out the form or use any of these direct channels to get in touch with me.
                </p>

                {/* Direct Action Buttons */}
                <div className="d-flex flex-column gap-3">
                  <Button 
                    variant="light" 
                    size="lg" 
                    href="tel:+959265007140" 
                    className="text-start d-flex align-items-center gap-3 shadow-sm rounded-3 py-3"
                  >
                    <span className="fs-4">📞</span>
                    <div>
                      <small className="d-block text-muted text-uppercase fw-bold" style={{ fontSize: '10px' }}>Call Me Directly</small>
                      <span className="fw-semibold text-dark">+95 9 265 007 140</span>
                    </div>
                  </Button>

                  <Button 
                    variant="light" 
                    size="lg" 
                    href="mailto:www.waiphyo222@gmail.com" 
                    className="text-start d-flex align-items-center gap-3 shadow-sm rounded-3 py-3"
                  >
                    <span className="fs-4">✉️</span>
                    <div>
                      <small className="d-block text-muted text-uppercase fw-bold" style={{ fontSize: '10px' }}>Email Me</small>
                      <span className="fw-semibold text-dark">waiphyo222@gmail.com</span>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Instant Chat Apps */}
              <div className="mt-5">
                <h6 className="text-white-50 text-uppercase fw-bold mb-3" style={{ letterSpacing: '1px' }}>Instant Chat</h6>
                <div className="d-flex gap-2">
                  <Button variant="success" href="https://wa.me/959265007140" target="_blank" className="w-50 py-2 rounded-3">
                    WhatsApp
                  </Button>
                  <Button variant="info" href="https://t.me/waiphyo" target="_blank" className="w-50 py-2 text-white rounded-3">
                    Telegram
                  </Button>
                </div>
              </div>
            </Col>

            {/* ⬜ ညာဘက်ခြမ်း - Message Form */}
            <Col lg={7} className="p-4 p-md-5 bg-white">
              <h4 className="fw-bold text-dark mb-4">Send Me a Message</h4>
              
              <Form
                action="https://formsubmit.co/www.waiphyo222@gmail.com"
                method="POST"
              >
                {/* FormSubmit Configurations */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold text-secondary">Your Name</Form.Label>
                      <Form.Control type="text" name="name" placeholder="John Doe" required className="py-2 rounded-3 bg-light border-0" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold text-secondary">Your Email</Form.Label>
                      <Form.Control type="email" name="email" placeholder="you@example.com" required className="py-2 rounded-3 bg-light border-0" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold text-secondary">Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Type your message details here..." required className="rounded-3 bg-light border-0" />
                </Form.Group>

                <div className="text-end">
                  <Button variant="primary" type="submit" className="px-5 py-2 fw-semibold shadow rounded-3">
                    Send Message <i className="bi bi-send ms-2"></i>
                  </Button>
                </div>
              </Form>
            </Col>

          </Row>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;