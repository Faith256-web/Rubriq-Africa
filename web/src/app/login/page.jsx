"use client";

import { useState, useEffect, Suspense } from "react";
import { Container, Card, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

function LoginContent() {
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  
  const [isLogin, setIsLogin] = useState(true);
  
  useEffect(() => {
    if (tabParam === "signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [tabParam]);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // We use async/await here to wait for the backend API response
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (isLogin) {
        // Send a POST request to our login endpoint
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        
        const data = await response.json();

        if (response.ok) {
          setSuccess("Successfully logged in! Redirecting...");
          // Redirect the user based on their role
          setTimeout(() => router.push(data.role === 'superadmin' ? '/dashboard' : '/'), 1500);
        } else {
          // Display the error from the backend if login fails
          setError(data.message || "Login failed");
        }
      } else {
        // Send a POST request to our register endpoint
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccess("Account successfully created! Please log in.");
          setIsLogin(true); // Switch to login tab
        } else {
          setError(data.message || "Registration failed");
        }
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-5 mt-5">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "65vh" }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-100"
          style={{ maxWidth: "450px" }}
        >
          <Card className="shadow p-4 glass-panel border-0">
            <h2 className="text-center fw-bold mb-4 text-primary-custom">
              {isLogin ? "Welcome Back" : "Create an Account"}
            </h2>
            
            <p className="text-center text-muted mb-4 small">
              {isLogin 
                ? "Enter your credentials to access your account." 
                : "Join us in building a sustainable future. Sign up today."}
            </p>

            {/* TOGGLE TAB */}
            <div className="d-flex mb-4 bg-light rounded-pill p-1">
              <Button 
                variant={isLogin ? "primary" : "light"} 
                className={`w-50 rounded-pill fw-bold ${isLogin ? "btn-primary-custom" : "text-muted border-0"}`}
                onClick={() => setIsLogin(true)}
              >
                Log In
              </Button>
              <Button 
                variant={!isLogin ? "primary" : "light"} 
                className={`w-50 rounded-pill fw-bold ${!isLogin ? "btn-primary-custom" : "text-muted border-0"}`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </Button>
            </div>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
              {!isLogin && (
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small">Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Faith Mercy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold small">Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="faithmercy256@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold small d-flex justify-content-between">
                  Password
                  {isLogin && <a href="#" className="text-decoration-none small text-primary-custom">Forgot?</a>}
                </Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 fw-bold btn-primary-custom py-2"
                disabled={loading}
              >
                {loading ? "Processing..." : isLogin ? "Log In" : "Sign Up"}
              </Button>

              <div className="text-center mt-4 mb-2">
                <span className="text-muted small">Or continue with</span>
              </div>
              
              <Row className="g-2">
                <Col>
                  <Button variant="outline-secondary" className="w-100 py-2 fw-bold text-dark bg-white">
                    <i className="bi bi-google me-2 text-danger"></i> Google
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div className="text-center pt-5 mt-5">Loading authentication...</div>}>
      <LoginContent />
    </Suspense>
  );
}
