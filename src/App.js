import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import InventoryDashboard from "./pages/InventoryDashboard";
import Inventory from "./pages/Inventory";
import ItemEntry from "./pages/ItemEntry";
import StockLevels from "./pages/StockLevels";
import Reports from "./pages/Reports";
import Audits from "./pages/Audits";

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Navbar />

        <div style={styles.content}>
          <Sidebar />

          <div style={styles.mainContent}>
            <Routes>
              <Route path="/" element={<InventoryDashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/item-entry" element={<ItemEntry />} />
              <Route path="/stock-levels" element={<StockLevels />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/audits" element={<Audits />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  content: {
    display: "flex",
    flex: 1,
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },
};

export default App;
