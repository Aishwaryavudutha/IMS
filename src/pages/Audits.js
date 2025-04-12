import React, { useState } from "react";

const Audits = () => {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const audits = [
    { id: 1, department: "Computer Science", date: "2025-03-15", status: "Completed" },
    { id: 2, department: "Mechanical", date: "2025-03-14", status: "Pending" },
    { id: 3, department: "Electronics", date: "2025-03-13", status: "Completed" },
    { id: 4, department: "Civil", date: "2025-03-12", status: "Pending" },
  ];

  const filteredAudits = audits.filter(
    (audit) =>
      audit.department.toLowerCase().includes(search.toLowerCase()) &&
      audit.date.includes(dateFilter)
  );

  const styles = {
    container: {
      maxWidth: "900px",
      margin: "40px auto",
      padding: "20px",
      background: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    title: {
      fontSize: "26px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    filters: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      width: "200px",
      outline: "none",
    },
    tableWrapper: {
      overflowX: "auto",
      borderRadius: "8px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "16px",
      background: "#fff",
    },
    th: {
      background: "#007bff",
      color: "white",
      padding: "12px",
      textAlign: "left",
      border: "1px solid #ddd",
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #ddd",
      borderRight: "1px solid #ddd", // Ensures right-side border for each cell
    },
    lastTd: {
      padding: "12px",
      borderBottom: "1px solid #ddd",
      borderRight: "1px solid #ddd", // Ensure border consistency for the last column
      textAlign: "center",
      fontWeight: "bold",
    },
    evenRow: {
      background: "#f8f9fa",
    },
    completed: {
      color: "green",
      fontWeight: "bold",
    },
    pending: {
      color: "red",
      fontWeight: "bold",
    },
    noData: {
      textAlign: "center",
      color: "gray",
      fontStyle: "italic",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📋 Audit Reports</h2>
      <div style={styles.filters}>
        <input
          type="text"
          placeholder="🔍 Search department..."
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <input type="date" onChange={(e) => setDateFilter(e.target.value)} style={styles.input} />
      </div>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Department</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAudits.length > 0 ? (
              filteredAudits.map((audit, index) => (
                <tr key={audit.id} style={index % 2 === 0 ? styles.evenRow : {}}>
                  <td style={styles.td}>{audit.id}</td>
                  <td style={styles.td}>{audit.department}</td>
                  <td style={styles.td}>{audit.date}</td>
                  <td
                    style={{
                      ...styles.lastTd,
                      color: audit.status === "Completed" ? "green" : "red",
                    }}
                  >
                    {audit.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={styles.noData}>
                  ❌ No Reports Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Audits;
