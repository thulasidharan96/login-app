import React from 'react';

const Footer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '5vh' }}>
      <footer style={{ textAlign: 'center', backgroundColor: 'gray'}}>
        <p>&copy; {new Date().getFullYear()} Company XYZ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;