import React from "react";
import "./About.css";
import pfp2 from "../../images/ProfilePic2.png";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <>
      <div className="container-fluid" id="main">
        <div className="row">
          <div className="col-lg-4 col-sm-6 Left" align="center">
            <img src={pfp2} class="img-fluid "></img>
          </div>
          <div className="col-lg-8 col-sm-6 Right">
            <div className="row">
              <div className="col-12" id="details">
                <p>
                  I'm a current standing junior Computer Science student at
                  California Polytechnic University of Pomona. As a passionate
                  front end developer, I am always looking to learn and grow in
                  the field. With a strong foundation in HTML, CSS, JS, and
                  Java, I am excited to take on new challenges and continue to
                  develop my skills.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col " id="skills">
                <h1>
                  <u>Skills</u>
                </h1>
                <ul>
                  <li> HTML, CSS, JavaScript</li> <li>Java and Python </li>{" "}
                </ul>
                <h1>
                  <u>Technologies</u>
                </h1>
                <ul>
                  <li> VS code</li> <li>Git/Github</li>
                  <li>ReactJS and React Native</li>
                </ul>
              </div>
              <div className="col " id="interests">
                <h1>
                  <u>Interests</u>
                </h1>
                <table>
                  <tr>
                    <th>Foods</th> <td>Súp Noodle Bar's Beef Brisket Pho</td>
                  </tr>
                  <tr>
                    <th>Anime</th> <td>Haikyuu</td>
                  </tr>
                  <tr>
                    <th>Games</th> <td>Valorant, Overwatch</td>
                  </tr>
                  <tr>
                    <th>Hobbies</th> <td>Rock Climbing, Overwatch</td>
                  </tr>
                  <tr>
                    <th>Drinks</th> <td>Peppermint Coffee Latte</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col" id="courses">
                <h1>
                  <u>Relevant Courses</u>
                </h1>

                <ul>
                  <li>Intro Comp Info Tech, Introduction to Programming</li>
                  <li>Python Programming I, Python Programming II</li>
                  <li>Intro. to C++ Programming, Adv. C++ Programming</li>
                  <li>Pre-Calculus, Calculus I, Calculus II, Calculus 3</li>
                  <li>
                    Data Structure Advanced Programming, Discrete Structures
                  </li>
                  <li>Intro Cyber Security Network Communications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
