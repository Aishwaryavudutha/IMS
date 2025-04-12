import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* Top Brown Bar */}
      <div style={styles.topBar}>
        <span style={styles.topBarText}>
          విగ్నాన్ ఫౌండేషన్ ఫర్ సైన్స్ టెక్నాలజీ అండ్ రీసెర్చ్ / विज्ञान शास्त्र प्रौद्योगिकी और अनुसन्धान संगठन
        </span>
        <div style={styles.topLinks}>
          <Link to="/international-students" style={styles.link}>International Students</Link>
          <Link to="/new-student" style={styles.link}>New Student</Link>
          <Link to="/parent" style={styles.link}>Parent</Link>
          <Link to="/alumni" style={styles.link}>Alumni</Link>
          <Link to="/quick-link" style={styles.link}>Quick link</Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div style={styles.navbar}>
        {/* Vignan Logo */}
        <Link to="/">
          <img src="/logo.png" alt="Vignan Logo" style={styles.logo} />
        </Link>

        {/* Main Navigation Links */}
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.navLink}>HOME</Link></li>
          <li><Link to="/academics" style={styles.navLink}>ACADEMICS</Link></li>
          <li><Link to="/admissions" style={styles.navLink}>ADMISSIONS</Link></li>
          <li><Link to="/notifications" style={styles.navLink}>NOTIFICATIONS</Link></li>
          <li><Link to="/people" style={styles.navLink}>PEOPLE</Link></li>
          <li><Link to="/research" style={styles.navLink}>RESEARCH</Link></li>
          <li><Link to="/university-life" style={styles.navLink}>UNIVERSITY LIFE</Link></li>
          <li><Link to="/about-us" style={styles.navLink}>ABOUT US</Link></li>
        </ul>
      </div>
    </nav>
  );
};

// Inline Styles for Navbar
const styles = {
  topBar: {
    backgroundColor: "#8B4513",
    color: "white",
    fontSize: "14px",
    padding: "8px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topBarText: {
    fontWeight: "bold",
  },
  topLinks: {
    display: "flex",
    gap: "25px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  },
  navbar: {
    backgroundColor: "#F8F8F8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  logo: {
    height: "70px",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    fontWeight: "bold",
  },
  navLink: {
    color: "#333",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s",
  },
};

export default Navbar;
