import React from "react";
import { useState } from "react";
useState;

const ColorPicking = () => {
  const [color, setColor] = useState("greenyellow");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h1>Color Picker</h1>

      <div>
        <p>selected color : {color}</p>
        <div
          style={{
            backgroundColor: color,
            minHeight: "200px",
            borderRadius: "20px",
            border: "5px solid black",
          }}
        ></div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <label style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          selected color:{" "}
        </label>{" "}
        <br></br>
        <input
          style={{ height: "50px", width: "75px", padding: "5px", borderRadius: "10px", border: "2px solid black" }}
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
};

export default ColorPicking;
