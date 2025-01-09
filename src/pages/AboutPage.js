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
          <p>Learn about our mission, values, and the team behind the innovation.</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission">
        <h2>Our Mission</h2>
        <p>At Company XYZ, we strive to empower businesses through cutting-edge technology solutions, ensuring a secure and reliable digital environment for everyone.</p>
      </div>

      {/* Values Section */}
      <div className="values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We continually push the boundaries of what is possible to create groundbreaking solutions.</p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>We operate with honesty and transparency in all our relationships.</p>
          </div>
          <div className="value-item">
            <h3>Customer Success</h3>
            <p>Your success is our top priority. We ensure you have everything you need to thrive.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team">
        <h2>Meet the Team</h2>
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

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-item">
          <p>"The expertise of Company XYZ's team is unparalleled. They have truly revolutionized our operations."</p>
          <h4>- Sarah Lee, Business Director</h4>
        </div>
        <div className="testimonial-item">
          <p>"Working with Company XYZ has been a game-changer for our security infrastructure."</p>
          <h4>- David Harris, IT Manager</h4>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
