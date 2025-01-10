import React from 'react';

const Footer = () => {
  return (
    <div className="col-md-4 mx-auto">
      <footer className="bg-light text-center text-dark fixed-bottom">
        <p>&copy; {new Date().getFullYear()} Company XYZ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
