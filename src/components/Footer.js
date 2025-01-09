import React from 'react';

const Footer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '10vh' }}>
      <div style={{ flex: 1 }}>
        {/* Other content goes here */}
      </div>
      <footer style={{ textAlign: 'center', backgroundColor: 'gray' }}>
        <p>&copy; {new Date().getFullYear()} Company XYZ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
