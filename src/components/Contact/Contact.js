import React from "react";
import { Link } from "react-router-dom";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="title">
        <p>Feel free to connect with me on socials!</p>
      </div>

      <div className="links">
        <Link to="https://github.com/rllov" fill="filled" target="_blank">
          <GitHub style={{ fontSize: 40, color: "#333" }} />
        </Link>
        <Link to="https://www.linkedin.com/in/ryanlov/" target="_blank">
          <LinkedIn style={{ fontSize: 40, color: "#0288D1" }} />
        </Link>
        <Link to="https://www.instagram.com/ryan_lov168/" target="_blank">
          <Instagram
            style={{
              fontSize: 40,
            }}
            sx={{
              color:
                "radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
