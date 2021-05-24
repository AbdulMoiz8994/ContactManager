import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./Components/Layout/Navbar";
import { ContactState } from "./Context/Contact/ContactState";
import { AuthState } from "./Context/Auth/AuthState";
import { AlertState } from "./Context/Alert/AlertState";
import { Home, About } from "./Components/Pages/index";
import { Register } from "./Components/Auth/Register";
import { UserLogin } from "./Components/Auth/UserLogin";
import {Alerts} from './Components/Layout/Alerts'

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <React.Fragment>
              <Navbar />

              <div className='container'>
                <Alerts/>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/userlogin' component={UserLogin} />
                </Switch>
              </div>
            </React.Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
