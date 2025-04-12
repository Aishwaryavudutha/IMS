import React, { useState } from "react";

const initialStockData = [
  { id: 1, name: "Laptops", category: "Electronics", stock: 10, threshold: 5, department: "IT" },
  { id: 2, name: "Printers", category: "Electronics", stock: 5, threshold: 3, department: "IT" },
  { id: 3, name: "Chemicals", category: "Lab Supplies", stock: 15, threshold: 10, department: "Chemistry" },
  { id: 4, name: "Microscopes", category: "Lab Equipment", stock: 3, threshold: 5, department: "Biology" },
  { id: 5, name: "Chairs", category: "Furniture", stock: 20, threshold: 10, department: "Administration" }
];

const StockLevels = () => {
  const [stockData, setStockData] = useState(initialStockData);
  const [selectedDepartment, setSelectedDepartment] = useState("IT");

  const handleThresholdChange = (id, newThreshold) => {
    setStockData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, threshold: newThreshold } : item
      )
    );
  };

  const filteredStock = stockData.filter(item => item.department === selectedDepartment);

  const styles = {
    stockContainer: {
      maxWidth: "900px",
      margin: "30px auto",
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      textAlign: "center",
      color: "#333",
    },
    paragraph: {
      textAlign: "center",
    },
    filters: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
      alignItems: "center",
    },
    select: {
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "10px",
      textAlign: "left",
      border: "1px solid #ddd",
    },
    td: {
      padding: "10px",
      textAlign: "left",
      border: "1px solid #ddd",
    },
    lowStock: {
      backgroundColor: "#ffcccc",
      color: "red",
      fontWeight: "bold",
    },
    alert: {
      color: "red",
      fontWeight: "bold",
    },
    input: {
      width: "60px",
      padding: "5px",
    },
  };

  return (
    <div style={styles.stockContainer}>
      <h2 style={styles.heading}>📊 Stock Levels</h2>
      <p style={styles.paragraph}>Monitor stock levels and set reorder thresholds.</p>

      {/* Department Filter */}
      <div style={styles.filters}>
        <label>Filter by Department:</label>
        <select style={styles.select} value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="IT">IT</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="Administration">Administration</option>
        </select>
      </div>

      {/* Stock Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Item Name</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Stock</th>
            <th style={styles.th}>Threshold</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStock.map(item => (
            <tr key={item.id}>
              <td style={styles.td}>{item.id}</td>
              <td style={styles.td}>{item.name}</td>
              <td style={styles.td}>{item.category}</td>
              <td style={item.stock < item.threshold ? styles.lowStock : styles.td}>{item.stock}</td>
              <td style={styles.td}>
                <input
                  type="number"
                  value={item.threshold}
                  min="1"
                  style={styles.input}
                  onChange={(e) => handleThresholdChange(item.id, parseInt(e.target.value))}
                />
              </td>
              <td style={styles.td}>
                {item.stock < item.threshold && (
                  <span style={styles.alert}>⚠️ stock levels are below the threshold</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockLevels;
