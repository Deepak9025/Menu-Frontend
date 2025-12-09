import React, { useState } from "react";
import axios from "axios";

function Menu() {
  const [day, setDay] = useState("");
  const [meal, setMeal] = useState("");
  const [result, setResult] = useState("");

  const checkMenu = async () => {
    if (!day || !meal) {
      setResult("Please select both day and meal");
      return;
    }

    try {
      const res = await axios.post(
        "https://menu-backend-1-lh87.onrender.com/api/menu/getMenu",
        { day, meal }
      );

      setResult(res.data.items);

    } catch (error) {
      setResult("Menu not found");
    }
  };

  return (
    <div className="menu">
      <div className="border">
        <select onChange={(e) => setDay(e.target.value)}>
          <option value="">Select Day</option>
          <option>Sunday</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>

        <select onChange={(e) => setMeal(e.target.value)}>
          <option value="">Select Meal</option>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>

        <button onClick={checkMenu}>Check the Menu</button>

        {result && (
          <div className="result-message">
            <h3>Menu:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
