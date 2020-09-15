import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SignupForm from "./components/SignupForm";

function App() {
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
