"use client";

import { Container, Row, Col, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="position-relative hero-section d-flex align-items-center"
        style={{ minHeight: "85vh", marginTop: "-6rem" }}
      >
        {/* Background Carousel */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
          <Carousel fade controls={false} indicators={false} interval={3500} pause={false} className="h-100 w-100">
            {[
              '/pavers_applied.png',
              '/rubber_paver_pallet.png',
              '/IMAGE2.jpg',
              '/IMAGE3.jpg',
              '/eco_rubber_bricks.png',
              '/rubber_floor_tiles.png'
            ].map((src, i) => (
              <Carousel.Item key={i} className="h-100 w-100">
                <div
                  className="w-100 h-100"
                  style={{
                    backgroundImage: `url('${src}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.35)"
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <Container className="position-relative pt-5">
          <Row>
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span
                  className="badge text-white rounded-pill px-3 py-2 mb-3"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  Uganda&apos;s Leading Sustainable Material Producer
                </span>

                <h1
                  className="display-3 fw-bold text-white mb-4"
                  style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
                >
                  Building a Sustainable Uganda from the Ground Up
                </h1>

                <p
                  className="lead text-light mb-5"
                  style={{ fontSize: "1.25rem", maxWidth: "600px" }}
                >
                  We transform end-of-life vehicle tires into durable,
                  affordable construction bricks and pavers.
                </p>

                <div className="d-flex gap-3 flex-wrap">
                  <Link href="/products" className="btn-primary-custom fs-5">
                    Explore Our Products{" "}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>

                  <Link
                    href="/about"
                    className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold fs-5"
                    style={{ borderWidth: "2px" }}
                  >
                    Our Mission
                  </Link>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section
        className="py-5"
        style={{
          backgroundColor: "var(--primary-dark)",
          color: "white",
          position: "relative",
        }}
      >
        <Container>
          <Row
            className="g-4 text-center glass-panel p-4 mx-2"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              marginTop: "-8rem",
            }}
          >
            <StatCard
              icon="bi-recycle"
              value="2,400+"
              label="Vehicle Tires Recycled"
              delay={0.1}
            />

            <StatCard
              icon="bi-bricks"
              value="18,000+"
              label="Bricks & Pavers Produced"
              delay={0.2}
            />

            <StatCard
              icon="bi-geo-alt-fill"
              value="2025"
              label="Established in Mbale"
              delay={0.3}
            />
          </Row>
        </Container>
      </section>

      {/* ================= INFO SECTION ================= */}
      <section className="content-section">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="position-relative rounded-4 overflow-hidden shadow-lg hover-lift"
                  style={{ height: "450px" }}
                >
                  <Image
                    src="/pavers_applied.png"
                    alt="African Workers Applying Recycled Paving Bricks"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="ps-lg-5"
              >
                <h6 className="text-primary-custom text-uppercase fw-bold mb-2">
                  Our Impact
                </h6>

                <h2 className="fw-bold mb-4 display-6">
                  Innovation meets Durability
                </h2>

                <p className="fs-5 text-muted mb-4">
                  Rubriq Africa transforms waste tires into durable construction
                  materials for sustainable development.
                </p>

                <Feature
                  icon="bi-shield-check"
                  title="Highly Durable"
                  text="Shock absorption and weather resistance."
                />

                <Feature
                  icon="bi-currency-dollar"
                  title="Affordable Cost"
                  text="Lower material cost for developers."
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

/* ================= TYPES ================= */

type StatCardProps = {
  icon: string;
  value: string;
  label: string;
  delay: number;
};

type FeatureProps = {
  icon: string;
  title: string;
  text: string;
};

/* ================= COMPONENTS ================= */

function StatCard({ icon, value, label, delay }: StatCardProps) {
  return (
    <Col md={4}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
      >
        <h2 className="display-4 fw-bold text-light">
          <i className={`bi ${icon} fs-1 d-block mb-2`} />
          {value}
        </h2>
        <p className="text-white-50 fs-5 mb-0">{label}</p>
      </motion.div>
    </Col>
  );
}

function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="d-flex align-items-start mb-4">
      <div
        className="rounded-circle p-3 me-3 d-flex align-items-center justify-content-center text-primary-custom"
        style={{
          backgroundColor: "var(--accent)",
          width: "60px",
          height: "60px",
        }}
      >
        <i className={`bi ${icon} fs-4`} />
      </div>

      <div>
        <h5 className="fw-bold">{title}</h5>
        <p className="text-muted mb-0">{text}</p>
      </div>
    </div>
  );
}