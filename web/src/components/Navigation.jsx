"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <Navbar
      expand="lg"
      className="sticky-top mx-3 mt-3 mb-4 px-3 shadow-lg"
      style={{ 
        zIndex: 1000, 
        borderRadius: "1rem",
        background: "linear-gradient(90deg, rgba(21,128,61,0.95) 0%, rgba(249,115,22,0.95) 100%)",
        backdropFilter: "blur(10px)"
      }}
      variant="dark"
    >
      <Container fluid>

        {/* ================= BRAND ================= */}
        <Navbar.Brand as={Link} href="/" className="fw-bold d-flex align-items-center">
          <span className="text-white d-flex align-items-center" style={{ fontSize: "1.5rem" }}>
            <Image
              src="/IMAGE3.jpg"
              alt="Rubriq Africa Logo"
              width={40}
              height={40}
              className="me-2 rounded-circle border border-2 border-white"
              style={{ objectFit: "cover" }}
            />
            Rubriq Africa
          </span>
        </Navbar.Brand>

        {/* ================= TOGGLE ================= */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

        {/* ================= LINKS ================= */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">

            <NavItem href="/" label="Home" active={pathname === "/"} />
            <NavItem href="/about" label="About" active={pathname === "/about"} />
            <NavItem href="/products" label="Products" active={pathname === "/products"} />
            <NavItem href="/contact" label="Contact" active={pathname === "/contact"} />

            {/* CTA */}
            <div className="ms-lg-4 mt-3 mt-lg-0 d-flex gap-2">
              <Link
                href="/login?tab=login"
                className="btn btn-outline-light fw-bold"
                style={{
                  padding: "0.5rem 1.2rem",
                  borderRadius: "50px",
                }}
              >
                Log In
              </Link>
              <Link
                href="/login?tab=signup"
                className="btn btn-light text-success fw-bold"
                style={{ padding: "0.5rem 1.2rem", borderRadius: "50px" }}
              >
                Sign Up
              </Link>
            </div>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

/* ================= REUSABLE NAV ITEM ================= */

function NavItem({ href, label, active }) {
  return (
    <Nav.Link
      as={Link}
      href={href}
      className={`mx-2 text-decoration-none text-white ${
        active ? "fw-bold border-bottom border-2 border-white" : "opacity-75 hover-opacity-100"
      }`}
    >
      {label}
    </Nav.Link>
  );
}