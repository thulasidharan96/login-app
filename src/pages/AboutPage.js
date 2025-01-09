import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './AboutPage.css'; // Separate CSS for AboutPage
import '../assets/1.png'; // Ensure the image exists and the path is correct

const AboutPage = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>About Company XYZ</h1>
          <p>Discover our mission, values, and the dedicated team behind our innovation.</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          At Digisailor, our mission is to provide innovative, secure, and scalable digital solutions to help businesses
          grow and thrive in an increasingly interconnected world. We focus on enhancing efficiency and ensuring robust
          security in every project we undertake.
        </p>
      </div>

      {/* Values Section */}
      <div className="values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Innovation</h3>
            <p>
              We prioritize cutting-edge technology to develop unique solutions that cater to the evolving needs of our
              clients.
            </p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>
              Our business operates on principles of honesty, transparency, and responsibility, ensuring that we
              build lasting trust with our clients.
            </p>
          </div>
          <div className="value-item">
            <h3>Customer Success</h3>
            <p>
              We are committed to your success by providing personalized support and tailored solutions that deliver
              tangible results.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="../assets/team1.jpg" alt="Team Member" />
            <h4>Jane Doe</h4>
            <p>CEO & Co-Founder</p>
          </div>
          <div className="team-member">
            <img src="../assets/team2.jpg" alt="Team Member" />
            <h4>John Smith</h4>
            <p>CTO & Co-Founder</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-item">
          <p>"The expertise of Digisailor's team is unparalleled. They have truly revolutionized our operations."</p>
          <h4>- Sarah Lee, Business Director</h4>
        </div>
        <div className="testimonial-item">
          <p>"Working with Digisailor has been a game-changer for our security infrastructure."</p>
          <h4>- David Harris, IT Manager</h4>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
