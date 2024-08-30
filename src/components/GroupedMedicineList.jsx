import React from "react";
import MedicineCard from "./MedicineCard";

function GroupedMedicineList({ medicines }) {
  const groupedMedicines = medicines.reduce(
    (acc, medicine) => {
      medicine.shifts.forEach((shift, index) => {
        if (shift) {
          const shiftName = index === 0 ? "Morning" : index === 1 ? "Afternoon" : "Night";
          acc[shiftName].push(medicine.medicineName);
        }
      });

      medicine.manualEntries.forEach((entry) => {
        acc[entry.time] = acc[entry.time] || [];
        acc[entry.time].push(medicine.medicineName);
      });

      return acc;
    },
    { Morning: [], Afternoon: [], Night: [] }
  );

  return (
    <div className="medicine-container">
      {Object.entries(groupedMedicines).map(([shift, medicines]) =>
        medicines.length > 0 ? (
          <MedicineCard key={shift} time={shift} medicines={medicines} />
        ) : null
      )}
    </div>
  );
}

export default GroupedMedicineList;
