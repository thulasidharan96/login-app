import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import heroImage from "../assets/1.png"; // Import the image

const AboutPage = () => {
  return (
    <div>
      <NavBar />

      {/* Hero Section */}
      <div
        className="hero d-flex justify-content-center align-items-center"
        style={{
          height: '100vh',
          backgroundImage: `url(${heroImage})`,  // Use the imported image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content text-center text-white">
          <h1 className="display-3">About Company XYZ</h1>
          <p>Discover our mission, values, and the dedicated team behind our innovation.</p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Our Mission</h2>
        <p className="text-center">
          At Digisailor, our mission is to provide innovative, secure, and scalable digital solutions to help businesses
          grow and thrive in an increasingly interconnected world. We focus on enhancing efficiency and ensuring robust
          security in every project we undertake.
        </p>
      </div>

      {/* Values Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Our Values</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>
                We prioritize cutting-edge technology to develop unique solutions that cater to the evolving needs of
                our clients.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="value-item">
              <h3>Integrity</h3>
              <p>
                Our business operates on principles of honesty, transparency, and responsibility, ensuring that we
                build lasting trust with our clients.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="value-item">
              <h3>Customer Success</h3>
              <p>
                We are committed to your success by providing personalized support and tailored solutions that deliver
                tangible results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Meet the Team</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="team-member text-center">
              <img
                src="https://via.placeholder.com/150/0000FF/808080?text=Jane+Doe"
                alt="Jane Doe"
                className="img-fluid rounded-circle mb-3"
              />
              <h4>Jane Doe</h4>
              <p>CEO & Co-Founder</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="team-member text-center">
              <img
                src="https://via.placeholder.com/150/FF0000/FFFFFF?text=John+Smith"
                alt="John Smith"
                className="img-fluid rounded-circle mb-3"
              />
              <h4>John Smith</h4>
              <p>CTO & Co-Founder</p>
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
                <p>"The expertise of Digisailor's team is unparalleled. They have truly revolutionized our operations."</p>
                <h4>- Sarah Lee, Business Director</h4>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="testimonial-item text-center">
                <p>"Working with Digisailor has been a game-changer for our security infrastructure."</p>
                <h4>- David Harris, IT Manager</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
