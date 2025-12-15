import React from 'react';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#f5f5f5' }}>
      <small>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</small>
    </footer>
  );
}

export default Footer;