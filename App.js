import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import MedicineForm from "./src/components/MedicineForm";
import MedicineList from "./src/components/MedicineList";
import NavBar from "./src/components/NavBar";

function App() {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  return (
    <div id="container">
      <NavBar/>
      <div id="content">
        <MedicineForm addMedicine={addMedicine} />
        <MedicineList medicines={medicines} />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
