import React, { useEffect, useState } from "react";

function MedicineForm({ addMedicine }) {
  const [medicineName, setMedicineName] = useState("");
  const [shifts, setShifts] = useState([false, false, false]);
  const [manualEntries, setManualEntries] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const anyShiftSelected = shifts.some(val => val === true);
    setIsDisabled(anyShiftSelected); 
  }, [shifts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isChecked = shifts.some(val => val === true);
    const customTimeAdded = manualEntries.length > 0;
    if (!isChecked && !customTimeAdded) {
      setError("Please choose your medication slot or add custom time.");
      return;
    }
    if (medicineName.trim() === "") {
      setError("Please enter the medicine name.");
      return;
    }
    const newMedicine = {
      medicineName,
      shifts,
      manualEntries,
    };
    addMedicine(newMedicine);
    setMedicineName("");
    setShifts([false, false, false]);
    setManualEntries([]);
    setError("");
  };

  const handleTimeSelect = (e) => {
    const time = e.target.value;
    setManualEntries([{ time, medicineName }]); // Only one custom time entry per medicine
  };

  return (
    <div id="med-form">
      <form onSubmit={handleSubmit}>
        <div id="med-name">
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            placeholder="Medicine Name"
            required
          />
          <div id="shifts">
            <input
              type="checkbox"
              checked={shifts[0]}
              onChange={() => setShifts([!shifts[0], shifts[1], shifts[2]])}
            />
            <label>Morning</label>

            <input
              type="checkbox"
              checked={shifts[1]}
              onChange={() => setShifts([shifts[0], !shifts[1], shifts[2]])}
            />
            <label>Afternoon</label>
            <input
              type="checkbox"
              checked={shifts[2]}
              onChange={() => setShifts([shifts[0], shifts[1], !shifts[2]])}
            />
            <label>Night</label>
          </div>
        </div>
        <div id="custom-time">
          <label>
            Custom Time:
          </label>
          <input
            type="time"
            onChange={handleTimeSelect}
            disabled={isDisabled}
          />
        </div>
        <button type="submit">Add Medicine</button>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </form>
    </div>
  );
}

export default MedicineForm;
