import * as React from "react";


export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "150px",
    width: "150px",
  };
  return <div style={styles}></div>;
}
