import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "./Logo";

const Header: React.FC = () => {
  const linkedInUrl = "https://www.linkedin.com/in/your-linkedin-url";
  const githubUrl = "https://github.com/your-github-url";

  return (
    <header className="bg-primary-light p-4 sm:p-6 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="flex items-center space-x-4">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white w-6 h-6" />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white w-6 h-6" />
        </a>
      </div>
    </header>
  );
};

export default Header;
