import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I’m <span className="purple">Jitu Ewnetu</span> from
            <span className="purple"> Ethiopia</span>. 🌍
            <br />
            I’m a software developer who’s passionate about creating meaningful
            digital experiences through code and design.
            <br />
            I specialize in <span className="purple">React</span>,
            <span className="purple"> UI/UX</span>, and
            <span className="purple"> frontend development</span>, and I’m always eager to grow in areas like
            <span className="purple"> mobile development</span> and
            <span className="purple"> impactful tech projects</span>.
            <br />
            <br />
            When I’m not coding, I enjoy doing things that keep me inspired and creative:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Designing interfaces & wireframes 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new tools & learning 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to podcasts & reflecting 🌸
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build with intention. Design with empathy. Code with clarity."{" "}
          </p>
          <footer className="blockquote-footer">Jitu Ewnetu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
