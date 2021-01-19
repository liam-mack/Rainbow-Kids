import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Programs from "./pages/Programs/Programs";
import Staff from "./pages/Staff/Staff";



function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Staff" component={Staff} />
        <Route exact path="/Programs" component={Programs} />
        <Route exact path="/facebook" render={() => (window.location = "https://www.facebook.com/rainbowkidschool/")} />
        <Route exact path="/instagram" render={() => (window.location = "https://www.facebook.com/rainbowkidschool/")} />
        <Route exact path="/twitter" render={() => (window.location = "https://www.facebook.com/rainbowkidschool/")} />
      </div>
    </Router>
  );
}

export default App;
