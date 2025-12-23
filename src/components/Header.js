import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"; 
import { HStack } from "@chakra-ui/react";

//Array of Social Media Links
const socials = [
  {
    icon: faEnvelope,
    url: "mailto:hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  return (
    <header>
      <nav className="social-links">
        <ul className="left-links">
          {socials.map((social, index) => (
            <li key={index}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          ))}          
        </ul>
        <div className="center-link">
          <p>Website Portfolio</p>
        </div>
        <div className="right-links">
            <a style={{ color: "black" }} href="#projects">Projects</a>
            <a style={{ color: "black" }} href="#contact">Contact me</a>
        </div>
      </nav>
    </header>
  );
}
export default Header;