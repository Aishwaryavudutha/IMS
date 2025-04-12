import React from "react";
import * as XLSX from "xlsx";
import html2pdf from "html2pdf.js";

const Reports = () => {
  // Function to handle PDF Export
  const exportToPDF = () => {
    const element = document.getElementById("report-content");
    html2pdf().from(element).save("Inventory_Report.pdf");
  };

  // Function to handle Excel Export
  const exportToExcel = () => {
    const data = [
      ["Item", "Quantity", "Status"],
      ["Laptop", 10, "In Stock"],
      ["Mouse", 25, "Low Stock"],
      ["Keyboard", 15, "In Stock"],
    ];

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventory Report");
    XLSX.writeFile(wb, "Inventory_Report.xlsx");
  };

  // Inline styles for the UI components
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
      width: "450px",
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

        {/* Report Content */}
        <div id="report-content" style={styles.reportBox}>
          <h3>Inventory Report</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Quantity</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Laptop</td>
                <td style={styles.td}>10</td>
                <td style={styles.td}>In Stock</td>
              </tr>
              <tr>
                <td style={styles.td}>Mouse</td>
                <td style={styles.td}>25</td>
                <td style={styles.td}>Low Stock</td>
              </tr>
              <tr>
                <td style={styles.td}>Keyboard</td>
                <td style={styles.td}>15</td>
                <td style={styles.td}>In Stock</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Buttons for Exporting Reports */}
        <div style={styles.buttonContainer}>
          <button onClick={exportToPDF} style={styles.pdfButton}>
            <span role="img" aria-label="pdf icon">📄</span> Export PDF
          </button>
          <button onClick={exportToExcel} style={styles.excelButton}>
            <span role="img" aria-label="excel icon">📊</span> Export Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
