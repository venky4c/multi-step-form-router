import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SignupForm from "./components/SignupForm";
//import { ThemeSwitcher, ThemeSwitcherGenerator } from "dark-theme-switcher";

function App() {
  // const toggler: any = document.getElementById("button");
  // new ThemeSwitcher(toggler).init();
  return (
    <Router>
      <div className="app">
        <SignupForm />
      </div>
      ;
    </Router>
  );
}

export default App;
