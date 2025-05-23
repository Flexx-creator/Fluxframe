import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Fluxframe</h1>
      <p className="text-xl md:text-2xl mb-8">Your workflow, reimagined by AI</p>
      <button
        onClick={() => navigate("/signup")}
        className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
      >
        Get Started
      </button>
    </div>
  );
          }
