import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import heroImage from '../assets/1.png'; // Import the image

const Home = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <div
        className="hero d-flex justify-content-center align-items-center"
        style={{
          height: '100vh',
          backgroundImage: `url(${heroImage})`, // Background image using import
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content text-center text-white">
          <h1 className="display-3">Company XYZ</h1>
          <p>Your gateway to innovation and excellence. Explore our cutting-edge services.</p>
        </div>
      </div>

      {/* Feature Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="feature-item">
              <h3>Innovative Solutions</h3>
              <p>Our products are designed to solve real-world problems with creativity.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-item">
              <h3>Customer Support</h3>
              <p>We offer 24/7 support to ensure you get the most out of our services.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-item">
              <h3>Secure and Reliable</h3>
              <p>Our systems are built with security and reliability at their core.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 mb-4">
              <div className="testimonial-item text-center">
                <p>"Company XYZ has transformed the way we do business. Highly recommend!"</p>
                <h4>- John Doe, CEO</h4>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="testimonial-item text-center">
                <p>"The support team is amazing, and the products are top-notch."</p>
                <h4>- Jane Smith, Manager</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
