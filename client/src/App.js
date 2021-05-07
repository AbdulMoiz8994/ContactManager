import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./Components/Layout/Navbar";
import { ContactState } from "./Context/Contact/ContactState";
import { Home, About } from "./Components/Pages/index";

function App() {
  return (
    <ContactState>
      <Router>
        <React.Fragment>
          <Navbar />
          
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
          
        </React.Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
