import "./navbar.css";
import React, { useEffect } from 'react';
import { useTheme } from '../context/themeContext';


const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const theme = isDarkMode ? 'dark' : 'light'

  useEffect(() => {
    const htmlEl: HTMLElement = document.documentElement;
    htmlEl.id = theme;
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <h1 className="title primary">babelbam</h1>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a
            href="https://www.npmjs.com/package/babelbam"
            className="link link-hover"
            target='_blank'
            title="NPM Page"
            rel="noreferrer"
          >
            <i className="fas fa-terminal primary is-small"></i>
          </a>
        </li>
        <li className="nav-item">
          <button className="button-light" onClick={toggleTheme}>
            <i className={`fas ${isDarkMode ? 'fa-solid fa-lightbulb' : ' fa-lightbulb'}`}></i>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;