// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800' style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h3 style={styles.title}>About Us</h3>
          <p style={styles.text}>We are a team dedicated to bringing you the best products.</p>
        </div>
        <div style={styles.column}>
          <h3 style={styles.title}>Links</h3>
          <ul style={styles.list}>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
            <li><a href="/contact" style={styles.link}>Contact Us</a></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h3 style={styles.title}>Follow Us</h3>
          <ul style={styles.socialLinks}>
            <li><a href="https://facebook.com" style={styles.link}>Facebook</a></li>
            <li><a href="https://twitter.com" style={styles.link}>Twitter</a></li>
            <li><a href="https://instagram.com" style={styles.link}>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.text}>&copy; {new Date().getFullYear()} CK Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    // backgroundColor: '#333',
    color: '#f0f0f0', // Changed to a lighter color for visibility
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
  },
  column: {
    flex: '1',
    minWidth: '200px',
    margin: '10px',
  },
  title: {
    color: '#fff', // Title color
  },
  text: {
    color: '#f0f0f0', // Text color
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  link: {
    color: '#80cfff', // Lighter link color for visibility
    textDecoration: 'none',
  },
  socialLinks: {
    listStyleType: 'none',
    padding: '0',
  },
  bottom: {
    borderTop: '1px solid #444',
    padding: '10px 0',
  },
};

export default Footer;
