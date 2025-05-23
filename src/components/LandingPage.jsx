import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Fluxframe</h1>
      <p>Your workflow, Reimagined by AI</p>
      <button
        onClick={handleClick}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
