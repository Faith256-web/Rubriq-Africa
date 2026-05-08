"use client";

// Bootstrap components
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// Animation library
import { motion } from "framer-motion";

export default function Contactus() {
  return (
    <div className="pt-5 mt-5">
      <Container className="mb-5 pb-5">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold text-primary-custom mb-3">
            Get in Touch
          </h1>

          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Whether you are a developer, contractor, NGO, or investor, we would love to hear from you.
          </p>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-panel p-5 shadow-lg border-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                <h3 className="fw-bold mb-4 text-center">Send an Inquiry</h3>

                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-muted">First Name</Form.Label>
                        <Form.Control type="text" placeholder="Faith" className="py-2 px-3 border-0 bg-light" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-muted">Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Mercy" className="py-2 px-3 border-0 bg-light" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mt-3">
                    <Form.Label className="fw-bold small text-muted">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="faithmercy256@gmail.com" className="py-2 px-3 border-0 bg-light" />
                  </Form.Group>

                  <Form.Group className="mt-3">
                    <Form.Label className="fw-bold small text-muted">Subject / Purpose</Form.Label>
                    <Form.Select className="py-2 px-3 border-0 bg-light text-muted">
                      <option>Select an option...</option>
                      <option>Partnership Inquiry</option>
                      <option>Product Order</option>
                      <option>Investment Opportunity</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mt-3">
                    <Form.Label className="fw-bold small text-muted">Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="How can we help you?" className="py-2 px-3 border-0 bg-light" />
                  </Form.Group>

                  <Button className="btn-primary-custom w-100 py-3 mt-4 d-flex justify-content-center gap-2">
                    Send Message <i className="bi bi-send-fill"></i>
                  </Button>
                </Form>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* ===== INFO BOXES ===== */}
        <Row className="mt-5 g-4">
          <Col md={6} lg={3}>
            <div className="p-4 rounded-4 text-center" style={{ backgroundColor: "var(--accent)" }}>
              <i className="bi bi-geo-alt-fill fs-2 mb-2 text-primary d-block"></i>
              <h6 className="fw-bold">Location</h6>
              <p className="text-muted small mb-0">Plot 6, Nsoba Lane<br/>Mbale, Uganda</p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="p-4 rounded-4 text-center" style={{ backgroundColor: "var(--accent)" }}>
              <i className="bi bi-whatsapp fs-2 mb-2 text-primary d-block"></i>
              <h6 className="fw-bold">WhatsApp Us</h6>
              <p className="text-muted small mb-0">+256 704363651</p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="p-4 rounded-4 text-center" style={{ backgroundColor: "var(--accent)" }}>
              <i className="bi bi-telephone-fill fs-2 mb-2 text-primary d-block"></i>
              <h6 className="fw-bold">Call Us</h6>
              <p className="text-muted small mb-0">+256 704363651</p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="p-4 rounded-4 text-center" style={{ backgroundColor: "var(--accent)" }}>
              <i className="bi bi-envelope-fill fs-2 mb-2 text-primary d-block"></i>
              <h6 className="fw-bold">Email Us</h6>
              <p className="text-muted small mb-0">faithmercy256@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}



/* ===== COMPONENTS ===== */

function ContactItem({ icon, title, text }) {
  return (
    <div className="d-flex align-items-center mb-4">
      <div
        className="rounded-circle d-flex align-items-center justify-content-center text-primary-custom me-3"
        style={{
          backgroundColor: "var(--accent)",
          width: "50px",
          height: "50px",
        }}
      >
        <i className={`bi ${icon} fs-4`}></i>
      </div>

      <div>
        <h6 className="fw-bold mb-1">{title}</h6>
        <p className="text-muted mb-0" style={{ whiteSpace: "pre-line" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
      style={{ width: "45px", height: "45px" }}
    >
      <i className={`bi ${icon}`}></i>
    </a>
  );
}