"use client";

import { useState } from "react";
import { Container, Row, Col, Card, Table, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";



export default function AdminDashboard() {
  const [inquiries] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", subject: "Product Order", status: "New", date: "2024-06-01" },
    { id: 2, name: "Sarah Smith", email: "sarah.s@ngo.org", subject: "Partnership", status: "Reviewed", date: "2024-05-30" },
    { id: 3, name: "Michael Ochieng", email: "mochieng@build.co.ug", subject: "Investment", status: "Responded", date: "2024-05-28" },
  ]);

  return (
    <div className="pt-5 mt-5">
      <Container className="mb-5 pb-5">

        {/* ===== HEADER ===== */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="fw-bold text-primary-custom mb-1">Admin Dashboard</h1>
            <p className="text-muted">Welcome back. Here is an overview of operations.</p>
          </div>

          <Link href="/" className="btn btn-outline-secondary rounded-pill">
            <i className="bi bi-arrow-left me-2"></i> Back to Website
          </Link>
        </div>

        {/* ===== SUMMARY CARDS ===== */}
        <Row className="gy-4 mb-5">

          <DashboardCard
            icon="bi-bricks"
            title="Total Products Sold"
            value="18,450"
            bg="var(--primary-dark)"
            delay={0.1}
          />

          <DashboardCard
            icon="bi-recycle"
            title="Tires Recycled"
            value="2,420"
            bg="green"
            delay={0.2}
          />

          <DashboardCard
            icon="bi-envelope-fill"
            title="New Inquiries"
            value="12"
            bg="var(--accent)"
            delay={0.3}
            darkIcon
          />

        </Row>

        {/* ===== TABLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-0 shadow-sm glass-panel">
            <Card.Header className="bg-transparent border-0 pt-4 pb-0 px-4">
              <h4 className="fw-bold">Recent Customer Inquiries</h4>
            </Card.Header>

            <Card.Body className="p-4">
              <Table responsive hover className="align-middle">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.id}>
                      <td>{inquiry.date}</td>
                      <td className="fw-bold">{inquiry.name}</td>
                      <td>{inquiry.email}</td>
                      <td>{inquiry.subject}</td>

                      <td>
                        <Badge bg={getStatusColor(inquiry.status)}>
                          {inquiry.status}
                        </Badge>
                      </td>

                      <td>
                        <button className="btn btn-sm btn-outline-dark">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </Table>
            </Card.Body>
          </Card>
        </motion.div>

      </Container>
    </div>
  );
}

{/* ===== COMPONENTS ===== */}

function DashboardCard({ icon, title, value, bg, delay, darkIcon }) {
  return (
    <Col md={4}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
      >
        <Card className="border-0 shadow-sm glass-panel p-3">
          <Card.Body className="d-flex align-items-center">

            <div
              className="rounded-circle p-3 me-3"
              style={{ backgroundColor: bg }}
            >
              <i className={`bi ${icon} fs-3 ${darkIcon ? "text-dark" : "text-white"}`}></i>
            </div>

            <div>
              <h6 className="text-muted mb-1 fw-bold">{title}</h6>
              <h3 className="mb-0 fw-bold">{value}</h3>
            </div>

          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
}

{/* ===== HELPER FUNCTION ===== */}

function getStatusColor(status) {
  if (status === "New") return "primary";
  if (status === "Reviewed") return "warning";
  return "success";
}