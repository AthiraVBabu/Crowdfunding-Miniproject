import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import chatbot from "./chat.jpg";

export default function NavbarComponent(props) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="navbar">
      <nav className="leftNavbarContainer">
        <div className="navItem" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="navItem" onClick={() => navigate("discover")}>
          Discover
        </div>
        <div className="navItem" onClick={() => navigate("create_project")}>
          Start a project
        </div>
      </nav>
      <div className="centerNavbarContainer">
        <span
          className="websiteName"
          style={{
            fontSize: "40px",
            color: isHovered ? "darkgreen" : "green",
            transition: "color 0.3s",
          }}
        >
          GiveNow
        </span>
      </div>
      <div className="rightNavbarContainer">
        <div
          className="navItem"
          onClick={() => navigate("chat")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={chatbot}
            alt="im"
            style={{
              width: "50px",
              height: "auto",
              paddingTop: "5px",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s",
            }}
          />
        </div>
        <div className="navItem">
          <Link to="/profile" state={{ address: props.address }}>
            {props.address.slice(0, 5) +
              "..." +
              props.address.slice(props.address.length - 4, props.address.length)}
          </Link>
        </div>
      </div>
    </div>
  );
}
