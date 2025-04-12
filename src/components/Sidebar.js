import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <nav style={styles.nav}>
        {["Inventory", "Item Entry", "Stock Levels", "Reports", "Audits"].map((item) => (
          <Link key={item} to={`/${item.toLowerCase().replace(" ", "-")}`} style={styles.navLink}>
            {item}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

// Sidebar Styling
const styles = {
  sidebar: {
    width: "260px", 
    height: "100vh",
    backgroundColor: "#8B4513", 
    color: "white",
    padding: "25px 20px", 
    display: "flex",
    flexDirection: "column",
  },
  navLink: {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "14px",
    borderRadius: "6px",
    backgroundColor: "#A0522D",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "500",
    transition: "background 0.3s, transform 0.2s",
  },
};

export default Sidebar;
