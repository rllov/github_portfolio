import React from "react";
import "./About.css";
import profileImage2 from "../../images/ProfilePic2.png";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="Left">
          <div className="img_container">
            <img src={profileImage2} alt="Second image of me"></img>
          </div>
        </div>
        <div className="Right">
          <div className="details">
            <p>
              I'm a current standing junior Computer Science student at
              California Polytechnic University of Pomona.
              <br></br>
              As a passionate front end developer, I am always looking to learn
              and grow in the field. With a strong foundation in HTML, CSS, JS,
              and Java, I am excited to take on new challenges and continue to
              develop my skills.
            </p>
          </div>
          <div className="bottom_right">
            <div className="skills">
              <h1>
                <u>Skills</u>
              </h1>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Java and Python</li>
                <li>ReactJS, React Native</li>
              </ul>
            </div>
            <div className="interests">
              <h1>
                <u>Interests</u>
              </h1>
              <table>
                <tr>
                  <th>Foods</th> <td>Noodle Sup Bar's Beef Brisket Pho</td>
                </tr>
                <tr>
                  <th>Anime</th> <td>Haikyuu</td>
                </tr>
                <tr>
                  <th>Games</th> <td>Valorant</td>
                </tr>
              </table>
            </div>
            <div className="courses">
              <h1>
                <u>Relevant Courses</u>
              </h1>
              <p>
                Intro Comp Info Tech, Introduction to Programming
                <br></br>Python Programming I, Python Programming II<br></br>
                Intro. to C++ Programming, Adv. C++ Programming<br></br>
                Pre-Calculus, Calculus I, Calculus II
                <br></br>Data Structure Advanced Programming, Discrete
                Structures
                <br></br>
                Intro Cyber Security Network Communications<br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
