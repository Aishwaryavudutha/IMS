import React from "react";

const InventoryDashboard = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const statsContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const statBox = {
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "5px",
    textAlign: "center",
    flex: 1,
    margin: "0 10px",
  };

  const tableContainer = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  };

  const thStyle = {
    background: "#007bff",
    color: "white",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const stockTdStyle = {
    padding: "10px",
    background: "#d4edda",
    color: "#155724",
  };

  const alertStyle = {
    background: "#fff3cd",
    color: "#721c24",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      {/* Dashboard Title */}
      <div style={titleStyle}>Inventory Management Dashboard</div>

      {/* Stats Section */}
      <div style={statsContainer}>
        <div style={statBox}>
          <h3>Total Items</h3>
          <p>1,234</p>
        </div>
        <div style={statBox}>
          <h3>Low Stock</h3>
          <p>23</p>
        </div>
        <div style={statBox}>
          <h3>Pending Orders</h3>
          <p>45</p>
        </div>
        <div style={statBox}>
          <h3>Recent Audits</h3>
          <p>12</p>
        </div>
      </div>

      {/* Inventory Table */}
      <table style={tableContainer}>
        <thead>
          <tr>
            <th style={thStyle}>Item Name</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Stock</th>
            <th style={thStyle}>Threshold</th>
            <th style={thStyle}>Last Updated</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Laptop Dell XPS</td>
            <td style={tdStyle}>Electronics</td>
            <td style={stockTdStyle}>45 units</td>
            <td style={tdStyle}>20</td>
            <td style={tdStyle}>2024-01-20</td>
            <td style={tdStyle}>
              <span role="img" aria-label="edit">✏️</span>{" "}
              <span role="img" aria-label="delete">🗑️</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Low Stock Alert */}
      <div style={alertStyle}>
        <center>⚠️ <strong>Low Stock Alert:</strong> Printer Paper is below threshold</center>
      </div>
    </div>
  );
};

export default InventoryDashboard;