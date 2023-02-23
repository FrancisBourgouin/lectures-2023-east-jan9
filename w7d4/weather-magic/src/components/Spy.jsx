import { useEffect } from "react";

export default function Spy(props) {
  const report = (event) => {
    console.log(`Target clicked at: ${event.clientX}, ${event.clientY}`);
  };

  useEffect(() => {
    document.addEventListener("click", report);

    // Cleanup of the effect
    return () => document.removeEventListener("click", report);
  });

  // SIDE EFFECT OF REACT RENDERING
  // UNWANTED BEHAVIOR

  return <span style={{ fontSize: "0.3em" }}>🕵️‍♀️</span>;
}
