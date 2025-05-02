"use client";
import React, { useState } from "react";

export default function Text() {
  const [success, setSuccess] = useState(false);

  const buttonText = typeof window !== "undefined" ? "Click here" : "Click me";

  const handleClick = async () => {
    try {
      const res = await fetch("/api/ping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: "ping" }),
      });
      const data = await res.json();

      if (data.status === "successsss") {
        setSuccess(true);
        alert("Success");
      } else {
        setSuccess(false);
        alert("Error");
      }
    } catch (error) {
      setSuccess(false);
      alert("Error");
      console.error("Error during fetch:", error);
    }
  };

  return (
    <button
      className={`rounded px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-white/20 mt-10 ${success ? "bg-green-500/90" : "bg-red-500/90"}`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}
