import React from "react";
import GroupedMedicineList from "./GroupedMedicineList";

function MedicineList({ medicines }) {
  return <GroupedMedicineList medicines={medicines} />;
}

export default MedicineList;
