import 'bulmaswatch/superhero/bulmaswatch.min.css';
import "./app.css";
import CellList from './components/cell-list';
import { useTheme } from './context/themeContext';
import React, { useEffect } from "react";
import Navbar from './components/navbar';

const App = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    const htmlElement: HTMLElement = document.documentElement;
    htmlElement.id = theme;
  }, [theme]);

  return (
    <div className="app">
      <Navbar />
      <CellList />
    </div>
  );
};

export default App;
