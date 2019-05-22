import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateLoad from "./components/create-load.component";
import LoadList from "./components/load-list.component";

import CreateContact from "./components/create-contact.component";
import ContactList from "./components/contact-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">EveryStop-Load Builder</Link>
            <div className="navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/createLoad" className="nav-link">Create Load</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/loads" className="nav-link">Loads</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/createContact" className="nav-link">Create Contact</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contacts" className="nav-link">Contacts</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/loads" component={LoadList} />
          <Route path="/createLoad" component={CreateLoad} />

          <Route path="/contacts" component={ContactList} />
          <Route path="/createContact" component={CreateContact} />
        </div>
      </Router>
    );
  }
}

export default App;
