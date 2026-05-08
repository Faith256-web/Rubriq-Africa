"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";



export default function OurProducts() {

  /* ===== DATA ===== */
  const products = [
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

    {
      id: 6,
      name: "Industrial Bulk Rubber Pavers",
      category: "Pavers",
      description: "Commercial-grade rubber pavers, supplied in bulk pallets for large scale development.",
      features: ["Cost Effective", "Durable", "Fast Coverage"],
      image: "/rubber_paver_pallet.png",
    },
    {
      id: 7,
      name: "Eco Thermal Rubber Bricks",
      category: "Bricks",
      description: "High thermal insulation rubber bricks designed specifically for sustainable walling.",
      features: ["Thermal Insulation", "Soundproof", "Lightweight"],
      image: "/eco_rubber_bricks.png",
    },
    {
      id: 8,
      name: "Outdoor Rubber Floor Tiles",
      category: "Landscaping",
      description: "Aesthetic thick rubber tiles, perfect for playgrounds, patios, and functional outdoor spaces.",
      features: ["Fall Protection", "Vibrant colors", "Permeable"],
      image: "/rubber_floor_tiles.png",
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
            style={{ backgroundColor: "#22c55e" }}  // ✅ FIXED (!important removed)
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

      {/* ===== LOCAL PAGE STYLES ===== */}
      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 1rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
        }
        .text-primary-custom {
          color: #15803d !important;
        }
      `}</style>
    </div>
  );
}

/* ===== REUSABLE CARD ===== */
function ProductCard({ product, delay }) {
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
          <Card.Body className="p-4 d-flex flex-column text-center">
            <h5 className="fw-bold mb-3">{product.name}</h5>

            {/* BUTTONS */}
            <div className="mt-auto pt-3">
              <button
                className="btn w-100 fw-bold rounded-pill shadow-sm"
                style={{
                  backgroundColor: "#f97316", /* Vibrant Orange */
                  color: "white",
                  border: "none",
                }}
              >
                Add to Cart
              </button>
            </div>
          </Card.Body>

        </Card>
      </motion.div>
    </Col>
  );
}