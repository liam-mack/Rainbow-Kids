import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Home from "./components/pages/Home";
import Program from "./components/pages/Program";
import About from "./components/pages/About";
import Staff from "./components/pages/Staff";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/program" component={Program} />
        <Route exact path="/about" component={About} />
        <Route path="/staff" component={Staff} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
