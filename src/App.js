import "./App.css";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skillss";
import Projects from "./Projects";
import Logo from "./Logo";
import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);
  return loading ? (
    <div className="loadingPage">
      <PacmanLoader color={"#9acd32"} loading={loading} size={25} margin={2} />
    </div>
  ) : (
    <Router>
      <div className="App">
        <Logo />
        <Switch>
          <Route path="/about">
            <Navbar />
            <About />
            <ContactUs />
          </Route>
          <Route path="/skills">
            <Navbar />
            <Skills />
            <ContactUs />
          </Route>
          <Route path="/projects">
            <Navbar />
            <Projects />
            <ContactUs />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
            <ContactUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
