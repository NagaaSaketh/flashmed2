import React from "react";

function MedicineCard({ time, medicines }) {
  return (
    <div className="medicine-card">
      <h3>{time}</h3>
      <ul>
        {medicines.map((medicine, index) => (
          <li key={index}>{medicine}</li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineCard;
