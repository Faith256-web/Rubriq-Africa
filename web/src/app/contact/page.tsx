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

        <Row className="gy-5">

          {/* ===== LEFT: CONTACT INFO ===== */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-panel p-5 h-100 shadow-sm">

                <h3 className="fw-bold mb-4">Contact Information</h3>

                <ContactItem
                  icon="bi-geo-alt-fill"
                  title="Our Location"
                  text={`Plot 6, Nsoba Lane\nMbale, Uganda`}
                />

                <ContactItem
                  icon="bi-envelope-fill"
                  title="Email Address"
                  text="faithmercy256@gmail.com"
                />

                <ContactItem
                  icon="bi-telephone-fill"
                  title="Phone Number"
                  text="+256 704363651"
                />

                <hr />

                <h6 className="fw-bold mt-4 mb-3">Follow Us</h6>
                <div className="d-flex gap-3">
                  <SocialIcon icon="bi-whatsapp" />
                  <SocialIcon icon="bi-facebook" />
                  <SocialIcon icon="bi-twitter-x" />
                  <SocialIcon icon="bi-linkedin" />
                </div>

              </div>
            </motion.div>
          </Col>

          {/* ===== RIGHT: FORM ===== */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="glass-panel p-5 shadow-sm">

                <h3 className="fw-bold mb-4">Send an Inquiry</h3>

                <Form>

                  <Row className="g-3">

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-muted">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Faith"
                          className="py-2 px-3 border-0 bg-light"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-bold small text-muted">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Mercy"
                          className="py-2 px-3 border-0 bg-light"
                        />
                      </Form.Group>
                    </Col>

                  </Row>

                  <Form.Group className="mt-3">
                    <Form.Label className="fw-bold small text-muted">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="faithmercy256@gmail.com"
                      className="py-2 px-3 border-0 bg-light"
                    />
                  </Form.Group>

                  <Form.Group className="mt-3">
                    <Form.Label className="fw-bold small text-muted">
                      Subject / Purpose
                    </Form.Label>
                    <Form.Select className="py-2 px-3 border-0 bg-light text-muted">
                      <option>Select an option...</option>
                      <option>Partnership Inquiry</option>
                      <option>Product Order</option>
                      <option>Investment Opportunity</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mt-3">
                    <Form.Label className="fw-bold small text-muted">
                      Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="How can we help you?"
                      className="py-2 px-3 border-0 bg-light"
                    />
                  </Form.Group>

                  <Button className="btn-primary-custom w-100 py-3 mt-4 d-flex justify-content-center gap-2">
                    Send Message <i className="bi bi-send-fill"></i>
                  </Button>

                </Form>
              </div>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

{/* ===== TYPES ===== */ }

type ContactItemProps = {
  icon: string;
  title: string;
  text: string;
};

type SocialIconProps = {
  icon: string;
};

{/* ===== COMPONENTS ===== */ }

function ContactItem({ icon, title, text }: ContactItemProps) {
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

function SocialIcon({ icon }: SocialIconProps) {
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