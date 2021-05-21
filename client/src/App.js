import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./Components/Layout/Navbar";
import { ContactState } from "./Context/Contact/ContactState";
import {AuthState} from './Context/Auth/AuthState'
import { Home, About } from "./Components/Pages/index";
import {Register} from './Components/Auth/Register'
function App() {
  return (
    <AuthState>
    <ContactState>
      <Router>
        <React.Fragment>
          <Navbar />
          
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path="/register" component={Register}/>
            </Switch>
          </div>
          
        </React.Fragment>
      </Router>
    </ContactState>
    </AuthState>
  );
}

export default App;
