import { useState } from "react";
import * as React from "react";
import { ColorBox } from "./ColorBox";

export function Color() {
  const [color, setColor] = useState("");
  const styes = {
    backgroundColor: color,
    fontSize: "1.5rem",
    fontWeight: "bold",
  };
  const [colors, setColors] = useState([]);
  return (
    <div>
      <input
        value={color}
        style={styes}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color" />
      <button onClick={() => setColors([...colors, color])}>Add Color</button>
      {colors.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
