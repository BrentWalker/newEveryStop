import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Loads from './components/Loads.js'
import SingleLoad from './components/SingleLoad.js'
import Contacts from './components/Contacts.js'
import SingleContact from './components/SingleContact.js'

class App extends Component {
    render() { 
        return ( 
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" Component={Loads}/>
                        <Route path="/:id" Component={SingleContact}/>
                    </Switch>
                </div>
            </Router>
         );
    }
}
 
export default App;