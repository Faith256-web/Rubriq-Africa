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
      className="glass-panel sticky-top mx-3 mt-3 mb-4 px-3"
      style={{ zIndex: 1000, borderRadius: "1rem" }}
    >
      <Container fluid>

        {/* ================= BRAND ================= */}
        <Navbar.Brand as={Link} href="/" className="fw-bold d-flex align-items-center">
          <span className="text-primary-custom d-flex align-items-center" style={{ fontSize: "1.5rem" }}>
            <Image
              src="/IMAGE3.jpg"
              alt="Rubriq Africa Logo"
              width={40}
              height={40}
              className="me-2 rounded-circle"
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
            <div className="ms-lg-4 mt-3 mt-lg-0">
              <Link
                href="/contact"
                className="btn-primary-custom"
                style={{ padding: "0.5rem 1.5rem" }}
              >
                Get Involved
              </Link>
            </div>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

/* ================= REUSABLE NAV ITEM ================= */

type NavItemProps = {
  href: string;
  label: string;
  active: boolean;
};

function NavItem({ href, label, active }: NavItemProps) {
  return (
    <Nav.Link
      as={Link}
      href={href}
      className={`mx-2 text-decoration-none ${
        active ? "text-primary-custom fw-bold" : ""
      }`}
    >
      {label}
    </Nav.Link>
  );
}