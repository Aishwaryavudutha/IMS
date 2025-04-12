import React, { useState } from "react";
import * as XLSX from "xlsx";
import html2pdf from "html2pdf.js";

const Reports = () => {
  const inventoryData = [
    { item: "Laptop", quantity: 10, status: "In Stock", department: "IT" },
    { item: "Mouse", quantity: 25, status: "Low Stock", department: "IT" },
    { item: "Keyboard", quantity: 15, status: "In Stock", department: "IT" },
    { item: "Beaker", quantity: 40, status: "In Stock", department: "Chemistry" },
    { item: "Microscope", quantity: 3, status: "Low Stock", department: "Biology" },
    { item: "Chairs", quantity: 20, status: "In Stock", department: "Administration" },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState("IT");

  const filteredData = inventoryData.filter(item => item.department === selectedDepartment);

  const exportToPDF = () => {
    const element = document.getElementById("report-content");
    html2pdf().from(element).save(`${selectedDepartment}_Inventory_Report.pdf`);
  };

  const exportToExcel = () => {
    const data = [
      ["Item", "Quantity", "Status"],
      ...filteredData.map(item => [item.item, item.quantity, item.status])
    ];
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventory Report");
    XLSX.writeFile(wb, `${selectedDepartment}_Inventory_Report.xlsx`);
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f4f4f4",
    },
    card: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "550px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    description: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "20px",
    },
    select: {
      padding: "8px",
      borderRadius: "5px",
      marginBottom: "15px",
    },
    reportBox: {
      background: "#f9f9f9",
      padding: "15px",
      borderRadius: "5px",
      marginBottom: "15px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      background: "#007bff",
      color: "white",
      padding: "10px",
      textAlign: "left",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #ddd",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
    },
    pdfButton: {
      backgroundColor: "#d9534f",
      color: "#fff",
      border: "none",
      padding: "10px 15px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    excelButton: {
      backgroundColor: "#5cb85c",
      color: "#fff",
      border: "none",
      padding: "10px 15px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          <span role="img" aria-label="document">📄</span> Inventory Reports
        </h2>
        <p style={styles.description}>
          Generate and export inventory reports in <b>PDF</b> or <b>Excel</b>.
        </p>

        {/* Department Filter */}
        <select
          style={styles.select}
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="IT">IT</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="Administration">Administration</option>
        </select>

        {/* Report Content */}
        <div id="report-content" style={styles.reportBox}>
          <h3>{selectedDepartment} Inventory Report</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Quantity</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td style={styles.td}>{item.item}</td>
                  <td style={styles.td}>{item.quantity}</td>
                  <td style={styles.td}>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Export Buttons */}
        <div style={styles.buttonContainer}>
          <button onClick={exportToPDF} style={styles.pdfButton}>
            📄 Export PDF
          </button>
          <button onClick={exportToExcel} style={styles.excelButton}>
            📊 Export Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
