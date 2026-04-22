"use client";

// Import only what we use from react-bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";

// Import animation library
import { motion } from "framer-motion";

export default function About() {
  return (
    // Top spacing for navbar offset
    <div className="pt-5 mt-5">
      
      {/* Main container */}
      <Container className="mb-5 pb-5">

        {/* ===== HEADER SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}   // start hidden and slightly down
          animate={{ opacity: 1, y: 0 }}    // fade in and move up
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold text-primary-custom mb-3">
            About Rubriq Africa
          </h1>

          <p
            className="lead text-muted mx-auto"
            style={{ maxWidth: "800px" }}
          >
            Established in 2025 and operating from Mbale plot 6, Nsoba lane,
            we are tackling Uganda&apos;s urban waste problem through recycling
            and sustainable engineering.
          </p>
        </motion.div>

        {/* ===== MISSION & VISION ===== */}
        <Row className="gy-4 mb-5">

          {/* --- Mission --- */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} // animate only once
              className="h-100"
            >
              <Card className="border-0 shadow-sm glass-panel h-100 p-4 hover-lift">
                <Card.Body>

                  {/* Icon */}
                  <div
                    className="rounded-circle p-3 mb-4 d-inline-flex text-primary-custom fs-2"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <i className="bi bi-bullseye"></i>
                  </div>

                  <h3 className="fw-bold mb-3">Our Mission</h3>

                  <p className="fs-5 text-muted">
                    To reduce urban waste pollution by transforming discarded
                    vehicle tires into durable construction materials.
                  </p>

                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* --- Vision --- */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }} // small delay for effect
              className="h-100"
            >
              <Card className="border-0 shadow-sm glass-panel h-100 p-4 hover-lift">
                <Card.Body>

                  {/* Icon */}
                  <div
                    className="rounded-circle p-3 mb-4 d-inline-flex text-primary-custom fs-2"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <i className="bi bi-eye-fill"></i>
                  </div>

                  <h3 className="fw-bold mb-3">Our Vision</h3>

                  <p className="fs-5 text-muted">
                    To see a Uganda where waste is treated as an economic
                    resource for sustainable development.
                  </p>

                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* ===== ROADMAP SECTION ===== */}
        <Row className="mt-5 pt-5 align-items-center">

          {/* LEFT BOX */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-light rounded-4 p-5 text-center shadow-sm">

                <i className="bi bi-clock-history display-1 text-primary-custom mb-3"></i>

                <h2 className="fw-bold">
                  Early Production <br /> & Validation
                </h2>

                <span
                  className="badge mt-2 fs-6 rounded-pill text-white"
                  style={{ backgroundColor: "var(--primary-light)" }}
                >
                  Current Stage
                </span>

              </div>
            </motion.div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={7} className="mt-4 mt-lg-0 ps-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="fw-bold mb-4">Our Growth Roadmap</h3>

              <ul className="list-unstyled fs-5 text-muted">

                <li className="mb-4 d-flex">
                  <i className="bi bi-check-circle-fill text-primary-custom me-3 mt-1"></i>
                  <div>
                    <strong>Establishment (2025):</strong> Founded in Mbale to recycle tires.
                  </div>
                </li>

                <li className="mb-4 d-flex">
                  <i className="bi bi-check-circle-fill text-primary-custom me-3 mt-1"></i>
                  <div>
                    <strong>Pilot Phase:</strong> Recycled 2,400+ tires and produced 18,000+ bricks.
                  </div>
                </li>

                <li className="mb-4 d-flex">
                  <i className="bi bi-arrow-right-circle-fill text-warning me-3 mt-1"></i>
                  <div>
                    <strong>Digital Expansion:</strong> Launching website for partnerships.
                  </div>
                </li>

                <li className="d-flex">
                  <i className="bi bi-graph-up-arrow text-secondary me-3 mt-1"></i>
                  <div>
                    <strong>Scaling:</strong> Expanding operations across Uganda.
                  </div>
                </li>

              </ul>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}