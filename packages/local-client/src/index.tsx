import ReactDOM from "react-dom";
import React from 'react';
import './index.css';
import App from "./app";
import { Provider } from "react-redux";
import { store } from "./state";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ThemeProvider } from "./context/themeContext";
// import CodeCell from "./components/code-cell";
// import CellList from "./components/cell-list";
// import Navbar from "./components/navbar";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);

// const root = ReactDOM.createRoot(
//   document.getElementById("#root") as HTMLElement
// );

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </Provider>
//   </React.StrictMode>
// );

// const App = () => {
//   const { isDarkMode } = useTheme();
//   const theme = isDarkMode ? 'dark' : 'light';

//   useEffect(() => {
//     const htmlEl: HTMLElement = document.documentElement;
//     htmlEl.id = theme;
//   }, [theme]);

//   return (
//     <Provider store={store}>
//       <div className="app">
//         <Navbar />
//         <CellList />
//       </div>
//     </Provider>
//   );
// };


