"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

/* ===== TYPES ===== */
type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
};

export default function OurProducts() {

  /* ===== DATA ===== */
  const products: Product[] = [
    {
      id: 1,
      name: "Eco-Dura Paver Block",
      category: "Pavers",
      description:
        "Heavy-duty interlocking rubberized paver block suitable for driveways, parks, and walkways.",
      features: ["High Shock Absorption", "Slip Resistant", "All-Weather Durability"],
      image: "/PAVER.jpg",
    },
    {
      id: 2,
      name: "Standard Construction Tech-Brick",
      category: "Bricks",
      description:
        "Construction brick blended with recycled rubber for insulation and resilience.",
      features: ["Thermal Insulation", "Tremor Resilience", "Lightweight"],
      image: "/IMAGE2.jpg",
    },
    {
      id: 3,
      name: "Garden Edge Block",
      category: "Landscaping",
      description:
        "Aesthetic edging blocks for landscaping. Safe and environmentally friendly.",
      features: ["Aesthetic Design", "Non-Toxic", "Easy Installation"],
      image: "/rubber_bricks.png",
    },
  ];

  return (
    <div className="pt-5 mt-5">
      <Container className="mb-5 pb-5">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <span
            className="badge text-white rounded-pill px-3 py-2 mb-3"
            style={{ backgroundColor: "var(--primary-light)" }}  // ✅ FIXED (!important removed)
          >
            Our Catalog
          </span>

          <h1 className="display-4 fw-bold text-primary-custom mb-3">
            Sustainable Products
          </h1>

          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            We have produced over 18,000 bricks and pavers. Explore our products made from recycled materials.
          </p>
        </motion.div>

        {/* ===== PRODUCTS GRID ===== */}
        <Row className="gy-5">

          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 0.2} />
          ))}

        </Row>
      </Container>
    </div>
  );
}

/* ===== COMPONENT TYPES ===== */
type ProductCardProps = {
  product: Product;
  delay: number;
};

/* ===== REUSABLE CARD ===== */
function ProductCard({ product, delay }: ProductCardProps) {
  return (
    <Col lg={4} md={6}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="h-100"
      >
        <Card className="border-0 shadow-sm glass-panel h-100 overflow-hidden d-flex flex-column">

          {/* IMAGE */}
          <div className="position-relative" style={{ height: "250px" }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
            />

            <div className="position-absolute top-0 start-0 m-3">
              <span className="badge bg-light text-primary-custom fw-bold px-3 py-2 shadow-sm rounded-pill">
                {product.category}
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <Card.Body className="p-4 d-flex flex-column">
            <h4 className="fw-bold mb-3">{product.name}</h4>

            <p className="text-muted mb-4 flex-grow-1">
              {product.description}
            </p>

            {/* FEATURES */}
            <ul className="list-unstyled mb-4 text-muted small">
              {product.features.map((feature, i) => (
                <li key={i} className="mb-2 d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <button
              className="btn btn-outline-secondary w-100 rounded-pill fw-bold"
              style={{
                borderColor: "var(--primary-light)",
                color: "var(--primary-dark)",
              }}
            >
              Request Quote
            </button>
          </Card.Body>

        </Card>
      </motion.div>
    </Col>
  );
}