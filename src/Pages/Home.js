import React from "react";
import hamburger from "../components/Assets/hamburger.svg";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    <div className="bb">
      <div className="cot">
        <div className="cot1">  
        <h1 className="mh1">
          <img src={hamburger} alt="Icon" />
          Pantry Palatte
        </h1>
        <p>Discover a plethora of new recipes that you can try out </p>
        <p className="bld">with ingredients you have in your house</p>
        </div>
        <button className="bol1" onClick={()=> {navigate("/login")}}>Login</button>
      </div>
    </div>
  );
}
export default Home;
