import React, { useState } from "react";

const inventoryData = [
  { id: 1, name: "Laptops", category: "Electronics", stock: 10, department: "IT" },
  { id: 2, name: "Printers", category: "Electronics", stock: 5, department: "IT" },
  { id: 3, name: "Chemicals", category: "Lab Supplies", stock: 15, department: "BIOTECHNOLOGY" },
  { id: 4, name: "SmartBoard", category: "Electronics", stock: 3, department: "Supplies" },
  { id: 5, name: "Chairs", category: "Furniture", stock: 20, department: "Administration" }
];

const Inventory = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventoryData.filter(item =>
    (selectedDepartment === "All" || item.department === selectedDepartment) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      margin: 0,
      padding: 0
    },
    container: {
      maxWidth: "900px",
      margin: "30px auto",
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    },
    heading: {
      textAlign: "center",
      color: "#333"
    },
    filters: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px"
    },
    selectInput: {
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "5px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse"
    },
    thTd: {
      border: "1px solid #ddd",
      padding: "10px",
      textAlign: "left"
    },
    th: {
      backgroundColor: "#007BFF",
      color: "white"
    },
    lowStock: {
      backgroundColor: "#ffcccc",
      color: "red",
      fontWeight: "bold"
    },
    alert: {
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#ffee8c",
      color: "#333",
      textAlign: "center",
      borderRadius: "5px"
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>📦 Inventory Management</h2>

        <div style={styles.filters}>
          <label>Filter by Department: </label>
          <select style={styles.selectInput} onChange={(e) => setSelectedDepartment(e.target.value)}>
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="BIOTECHNOLOGY">BIOTECHNOLOGY</option>
            <option value="Supplies">Supplies</option>
            <option value="Administration">Administration</option>
          </select>

          <input
            type="text"
            placeholder="Search items..."
            style={styles.selectInput}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Item Name</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Stock</th>
              <th style={styles.th}>Department</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map(item => (
              <tr key={item.id}>
                <td style={styles.thTd}>{item.id}</td>
                <td style={styles.thTd}>{item.name}</td>
                <td style={styles.thTd}>{item.category}</td>
                <td style={item.stock < 5 ? styles.lowStock : styles.thTd}>{item.stock}</td>
                <td style={styles.thTd}>{item.department}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredInventory.some(item => item.stock < 5) && (
          <div style={styles.alert}>
            ⚠️ Some items are low in stock! Reorder soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
