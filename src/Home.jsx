import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="text">
        <h1>Mess Menu Management System</h1>
      </div>
      <button className="view_name" onClick={() => navigate("/menu")}>
        View Menu
      </button>
    </div>
  );
}

export default Home;
