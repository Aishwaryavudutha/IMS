import React, { useState } from "react";

const ItemEntry = () => {
    const [poNumber, setPoNumber] = useState("");
    const [itemType, setItemType] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemVariant, setItemVariant] = useState("");
    const [department, setDepartment] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [receiptDate, setReceiptDate] = useState("");
    const [condition, setCondition] = useState("Functional");
    const [stockRecords, setStockRecords] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!poNumber || !itemType || !itemName || !itemVariant || !department || !itemDescription || !quantity || !receiptDate || !condition) {
            alert("Please fill all fields.");
            return;
        }

        const newItem = {
            poNumber,
            itemType,
            itemName,
            itemVariant,
            department,
            itemDescription,
            quantity,
            receiptDate,
            condition,
        };

        setStockRecords([...stockRecords, newItem]);

        // Reset form
        setPoNumber("");
        setItemType("");
        setItemName("");
        setItemVariant("");
        setDepartment("");
        setItemDescription("");
        setQuantity("");
        setReceiptDate("");
        setCondition("Functional");
    };

    return (
        <div style={{ maxWidth: "1000px", margin: "40px auto", background: "#f9f9f9", padding: "30px", borderRadius: "12px", boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}>
            <h2 style={{ textAlign: "center", marginBottom: "25px", fontSize: "24px", color: "#333" }}>Item Entry Form</h2>
            <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {[["PO Number", poNumber, setPoNumber], ["Item Type", itemType, setItemType], ["Item Name", itemName, setItemName], ["Item Variant", itemVariant, setItemVariant]].map(([label, value, setter], index) => (
                    <div key={index} style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                        <label style={{ fontWeight: "600", marginBottom: "6px", color: "#444" }}>{label}:</label>
                        <input type="text" value={value} onChange={(e) => setter(e.target.value)} required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />
                    </div>
                ))}

                {/* Department Field */}
                <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                    <label style={{ fontWeight: "600", marginBottom: "6px", color: "#444" }}>Department:</label>
                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />
                </div>

                {/* Item Description */}
                <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                    <label style={{ fontWeight: "600", marginBottom: "6px", color: "#444" }}>Item Description:</label>
                    <textarea value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} required style={{ height: "70px", padding: "10px", border: "1px solid #ccc", borderRadius: "6px", resize: "vertical" }}></textarea>
                </div>

                {[["Quantity Received", quantity, setQuantity, "number"], ["Date of Receipt", receiptDate, setReceiptDate, "date"]].map(([label, value, setter, type], index) => (
                    <div key={index} style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                        <label style={{ fontWeight: "600", marginBottom: "6px", color: "#444" }}>{label}:</label>
                        <input type={type} value={value} onChange={(e) => setter(e.target.value)} required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }} />
                    </div>
                ))}

                {/* Condition Select */}
                <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
                    <label style={{ fontWeight: "600", marginBottom: "6px", color: "#444" }}>Condition:</label>
                    <select value={condition} onChange={(e) => setCondition(e.target.value)} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}>
                        <option value="Functional">Functional</option>
                        <option value="Damaged">Damaged</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" style={{ gridColumn: "span 2", marginTop: "20px", padding: "12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", transition: "background-color 0.3s ease" }}>
                    Record Item
                </button>
            </form>

            {/* Stock Records Table */}
            <h2 style={{ textAlign: "center", marginTop: "30px", fontSize: "20px", color: "#333" }}>Stock Records</h2>
            <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse", background: "white", fontSize: "13px", borderRadius: "8px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.05)" }}>
                <thead>
                    <tr>
                        {["PO Number", "Item Type", "Item Name", "Item Variant", "Department", "Item Description", "Quantity", "Date of Receipt", "Condition"].map((header) => (
                            <th key={header} style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left", backgroundColor: "#007bff", color: "white", fontWeight: "600" }}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {stockRecords.map((item, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white" }} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e6f0ff")} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f2f2f2" : "white")}>
                            {["poNumber", "itemType", "itemName", "itemVariant", "department", "itemDescription", "quantity", "receiptDate", "condition"].map((key) => (
                                <td key={key} style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>{item[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemEntry;
