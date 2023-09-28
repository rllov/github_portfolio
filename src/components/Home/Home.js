import React from "react";
import Typewriter from "typewriter-effect";
import profileImage from "../../../public/profile.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="img">
        <img src={profileImage} alt="me"></img>
      </div>

      <div className="detail_container">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello")
                .pauseFor(1000)
                .typeString("!")
                .start();
            }}
          />
        </h1>
        <div className="title">
          <h1>My Name is Ryan Lov</h1>
        </div>
        <p>
          I am interested in becoming a front-end software engineer. I enjoy
          creating code that users can see and interact with.
        </p>
      </div>
    </div>
  );
};

export default Home;
