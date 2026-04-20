"use client";

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="mt-auto py-5"
      style={{
        backgroundColor: "var(--dark-panel)",
        color: "var(--dark-foreground)",
      }}
    >
      <Container>
        <Row className="gy-4">

          {/* ================= BRAND ================= */}
          <Col lg={4}>
            <h4 className="fw-bold mb-3 text-white d-flex align-items-center">
              <Image
                src="/IMAGE3.jpg"
                alt="Rubriq Africa Logo"
                width={40}
                height={40}
                className="me-2 rounded-circle"
                style={{ objectFit: "cover" }}
              />
              Rubriq Africa
            </h4>

            <p style={{ opacity: 0.8 }}>
              Transforming discarded vehicle tires into durable construction materials.
            </p>
          </Col>

          {/* ================= LINKS ================= */}
          <Col lg={4}>
            <h5 className="text-white mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/products" label="Our Products" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/dashboard" label="Admin Dashboard" />
            </ul>
          </Col>

          {/* ================= CONTACT ================= */}
          <Col lg={4}>
            <h5 className="text-white mb-3">Contact Us</h5>

            <address style={{ opacity: 0.8 }}>
              <strong>Rubriq Africa Enterprises Ltd</strong>
              <br />
              Plot 6, Nsoba Lane
              <br />
              Mbale, Uganda
              <br />
              <i className="bi bi-envelope me-2 mt-2 d-inline-block"></i>
              faithmercy256@gmail.com
              <br />
              <i className="bi bi-telephone me-2 mt-2 d-inline-block"></i>
              +256 704363651
            </address>

            <div className="d-flex gap-3 mt-3">
              <SocialIcon icon="bi-whatsapp" />
              <SocialIcon icon="bi-facebook" />
              <SocialIcon icon="bi-twitter-x" />
              <SocialIcon icon="bi-linkedin" />
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <div className="text-center" style={{ opacity: 0.6, fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} Rubriq Africa Enterprises Ltd. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}

/* ================= CLEAN REUSABLE COMPONENTS ================= */

type FooterLinkProps = {
  href: string;
  label: string;
};

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li className="mb-2">
      <Link
        href={href}
        className="text-decoration-none"
        style={{ color: "var(--dark-foreground)" }}
      >
        {label}
      </Link>
    </li>
  );
}

type SocialIconProps = {
  icon: string;
};

function SocialIcon({ icon }: SocialIconProps) {
  return (
    <a href="#" className="text-white fs-4">
      <i className={`bi ${icon}`}></i>
    </a>
  );
}