import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/girl.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I'm Jitu — a passionate software developer who loves solving real-world problems with code 💻✨
              <br />
              <br />
              I’m especially confident in
              <i>
                <b className="purple"> React, JavaScript, and UI/UX Design</b>
              </i>
              , and I’m always curious about building beautiful and functional interfaces.
              <br />
              <br />
              My interests lie in creating impactful &nbsp;
              <i>
                <b className="purple">web applications</b>
              </i>
              , crafting smooth user experiences, and exploring areas like &nbsp;
              <i>
                <b className="purple">mobile development</b>
              </i>{" "}
              and
              <i>
                <b className="purple"> decentralized systems</b>
              </i>{" "}
              when time allows 🌍.
              <br />
              <br />
              I'm also growing in backend tools like <b className="purple">Node.js</b> and embracing modern frameworks like{" "}
              <i>
                <b className="purple">Next.js</b>
              </i>{" "}
              to push my boundaries and build robust full-stack projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              I’d love to <span className="purple">connect</span> and collaborate 💬
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jiituu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jitu-h-75497814a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jih_nah/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
