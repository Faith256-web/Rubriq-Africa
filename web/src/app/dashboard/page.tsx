"use client";

// We import useEffect to trigger our backend data fetch, and useRouter to build protective routing
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Card, Table, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";

// We define our TypeScript strict schema layout so we know exactly what we receive from the database
type Inquiry = {
  id: number;
  name: string;
  email: string;
  subject: string;
  status: "New" | "Reviewed" | "Responded";
  date: string;
};

export default function AdminDashboard() {
  const router = useRouter(); // Router handles NextJS transitions securely
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true); // Loading guard

  // useEffect triggers exactly when the Dashboard mounts on the browser
  useEffect(() => {
    // STEP 1: AUTHENTICATION CHECK
    // Determine if the user successfully visited our /login page
    const session = localStorage.getItem("rubriq_admin_session");
    
    // If not, we forcibly kick them back to login. Privacy and security feature!
    if (!session) {
      router.push("/login");
      return; 
    }

    // STEP 2: BACKEND COMMUNICATION
    // Contacting the Node API at /api/inquiries
    async function fetchBackendData() {
      try {
        const response = await fetch("/api/inquiries");
        const jsonResult = await response.json();
        
        // Update the dashboard list dynamically with actual JSON storage data
        setInquiries(jsonResult);
      } catch (error) {
        console.error("Backend Error: Could not fetch inquiries:", error);
      } finally {
        setLoading(false); // Clear the loading state
      }
    }

    fetchBackendData();
  }, [router]);

  // Loading safety fallback while we contact the API
  if (loading) return <div className="text-center pt-5 mt-5 fw-bold">Connecting to Database...</div>;

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

{/* ===== TYPES ===== */}

type DashboardCardProps = {
  icon: string;
  title: string;
  value: string;
  bg: string;
  delay: number;
  darkIcon?: boolean;
};

{/* ===== COMPONENTS ===== */}

function DashboardCard({ icon, title, value, bg, delay, darkIcon }: DashboardCardProps) {
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

function getStatusColor(status: string) {
  if (status === "New") return "primary";
  if (status === "Reviewed") return "warning";
  return "success";
}