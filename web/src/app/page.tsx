"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    --green:      #1a6b3c;
    --green-light: #d6f0e0;
    --orange:     #e8600a;
    --orange-light: #fff1e8;
    --ink:        #111a13;
    --gray:       #6b7a6e;
    --white:      #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--ink);
    line-height: 1.5;
    overflow-x: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Hero Section - Reduced spacing */
  .hero {
    min-height: 80vh;
    position: relative;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, var(--green) 0%, #0f4024 100%);
    color: white;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('/pavers_applied.png');
    background-size: cover;
    background-position: center;
    opacity: 0.15;
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 1rem 1rem 2rem;
  }

  .hero-badge {
    display: inline-block;
    background: var(--orange);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    letter-spacing: 0.1em;
  }

  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .hero h1 span {
    color: var(--orange);
    position: relative;
  }

  .hero h1 span::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--orange);
    border-radius: 2px;
  }

  .hero p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  .btn-primary {
    background: var(--orange);
    color: white;
    box-shadow: 0 4px 15px rgba(232, 96, 10, 0.3);
  }

  .btn-primary:hover {
    background: #f97c34;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(232, 96, 10, 0.4);
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.4);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
    transform: translateY(-2px);
  }

  /* Stats Section */
  .stats {
    background: var(--orange-light);
    padding: 3rem 0;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    text-align: center;
  }

  .stat h3 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 900;
    color: var(--green);
    margin-bottom: 0.5rem;
  }

  .stat p {
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gray);
  }

  /* Features Section */
  .features {
    padding: 5rem 0;
    background: white;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .feature {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    border-top: 4px solid var(--orange);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .feature:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .feature-icon {
    width: 60px;
    height: 60px;
    background: var(--green-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: var(--green);
    font-size: 1.5rem;
  }

  .feature h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--ink);
  }

  .feature p {
    color: var(--gray);
    font-size: 0.95rem;
  }

  /* CTA Section */
  .cta {
    background: linear-gradient(135deg, var(--green) 0%, #0f4024 100%);
    padding: 5rem 0;
    color: white;
    text-align: center;
  }

  .cta h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
  }

  .cta h2 span {
    color: var(--orange);
  }

  .cta p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Section Headers */
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-badge {
    display: inline-block;
    background: var(--orange);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    color: var(--ink);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      max-width: 300px;
      justify-content: center;
    }

    .hero {
      min-height: 70vh;
    }
  }
`;

// Animation helper with proper typing
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as any
  }
});

export default function Home() {
  return (
    <>
      <style>{styles}</style>

      {/* Hero Section - Reduced spacing */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as any }}
          >
            <div className="hero-badge">Uganda's Sustainable Future</div>
            <h1>
              Building <span>Sustainable</span><br />
              Uganda
            </h1>
            <p>
              Transforming waste tires into durable, eco-friendly construction materials for a greener tomorrow.
            </p>
            <div className="cta-buttons">
              <Link href="/products" className="btn btn-primary">
                Explore Products
                <i className="bi bi-arrow-right" />
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Our Mission
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <motion.div className="stat" {...fadeUp(0)}>
              <h3>2,400+</h3>
              <p>Tires Recycled</p>
            </motion.div>
            <motion.div className="stat" {...fadeUp(0.2)}>
              <h3>18,000+</h3>
              <p>Products Made</p>
            </motion.div>
            <motion.div className="stat" {...fadeUp(0.4)}>
              <h3>2025</h3>
              <p>Founded</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Why Choose Us</div>
            <h2 className="section-title">Sustainable Innovation</h2>
          </div>
          <div className="features-grid">
            <motion.div className="feature" {...fadeUp(0)}>
              <div className="feature-icon">
                <i className="bi bi-shield-check" />
              </div>
              <h4>Durable & Strong</h4>
              <p>Weather-resistant and built to last in all conditions.</p>
            </motion.div>
            <motion.div className="feature" {...fadeUp(0.2)}>
              <div className="feature-icon">
                <i className="bi bi-currency-dollar" />
              </div>
              <h4>Cost Effective</h4>
              <p>Save 30-40% compared to traditional materials.</p>
            </motion.div>
            <motion.div className="feature" {...fadeUp(0.4)}>
              <div className="feature-icon">
                <i className="bi bi-leaf" />
              </div>
              <h4>Eco Friendly</h4>
              <p>Keep tires out of landfills and reduce pollution.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div {...fadeUp(0)}>
            <div className="section-badge">Ready to Build?</div>
            <h2>
              Order <span>Sustainable</span><br />
              Materials Today
            </h2>
            <p>
              Contact us for pricing, delivery, and technical support.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary">
                Get Started
                <i className="bi bi-arrow-right" />
              </Link>
              <Link href="/products" className="btn btn-secondary">
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}



