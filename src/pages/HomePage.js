import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './HomePage.css';
import '../1.png'

const Home = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Company XYZ</h1>
          <p>Your gateway to innovation and excellence. Explore our cutting-edge services.</p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Innovative Solutions</h3>
            <p>Our products are designed to solve real-world problems with creativity.</p>
          </div>
          <div className="feature-item">
            <h3>Customer Support</h3>
            <p>We offer 24/7 support to ensure you get the most out of our services.</p>
          </div>
          <div className="feature-item">
            <h3>Secure and Reliable</h3>
            <p>Our systems are built with security and reliability at their core.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-item">
          <p>"Company XYZ has transformed the way we do business. Highly recommend!"</p>
          <h4>- John Doe, CEO</h4>
        </div>
        <div className="testimonial-item">
          <p>"The support team is amazing, and the products are top-notch."</p>
          <h4>- Jane Smith, Manager</h4>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
