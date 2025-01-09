import React from 'react';

const Footer = () => {
  return (
    <footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', backgroundColor: 'gray' }}>
      <p>&copy; {new Date().getFullYear()} Company XYZ. All rights reserved.</p>
    </footer>
  );
};

export default Footer;