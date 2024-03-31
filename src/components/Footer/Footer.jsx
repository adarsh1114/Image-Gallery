import React from 'react';
import { BsGithub } from "react-icons/bs";
import './Footer.css'; 

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="Wrap"> 
        <div className="Container"> 
          <p className="Copyright">
            &copy; Copyright {year} by
            <a
              href="https://github.com/adarsh1114"
              target="_blank"
              rel="noopener noreferrer"
              className="GitHubLink" 
            >
              <BsGithub size={24} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
