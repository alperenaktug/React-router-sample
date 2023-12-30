import React from "react";
import { useNavigate } from "react-router-dom";

export default function Misssion() {
  const navigate = useNavigate();
  return (
    <>
      <div>Mission</div>
      <button onClick={() => navigate("/")}>Geriye Dön</button>
    </>
  );
}
