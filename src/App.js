import "./App.css";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <Navbar />
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
