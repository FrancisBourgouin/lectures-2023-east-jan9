import { Component, useEffect } from "react";

export default function Spy(props) {
  const report = () => {
    console.log("user clicked!");
  };

  useEffect(() => {
    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  });

  return <p>👾</p>;
}
