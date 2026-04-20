"use client";

// We import React hooks to manage our simple login form state
import { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useRouter } from "next/navigation"; // Hook to navigate user dynamically

export default function Login() {
  const router = useRouter(); // Next.js router for redirecting
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // This function is triggered when you submit the login form
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple test backend logic: We verify the password
    // In a real production app, this would be an API call verifying a hash via a database
    if (password === "admin123") {
      // If correct password, set test session in localStorage
      localStorage.setItem("rubriq_admin_session", "true");
      
      // Redirect to dashboard page
      router.push("/dashboard");
    } else {
      setError("Incorrect password. Hint: try admin123");
      setLoading(false);
    }
  };

  return (
    <div className="pt-5 mt-5">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <Card className="shadow p-4" style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}>
          <h2 className="text-center fw-bold mb-4 text-primary-custom">Admin Login</h2>
          
          <p className="text-center text-muted mb-4">
            Enter the admin password to access the backend dashboard.
          </p>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Password</Form.Label>
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
              {loading ? "Logging in..." : "Access Dashboard"}
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
