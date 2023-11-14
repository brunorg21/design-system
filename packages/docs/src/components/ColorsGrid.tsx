import { colors } from "@ignite-ui/tokens";
import { getContrast } from "polished";

export function ColorsGrid() {
  console.log(Object.entries(colors));

  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: getContrast(color, "white") < 3.5 ? "#000" : "#fff",
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}