import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

import Login from './containers/login';
import Home from './containers/home';
import Orders from "./containers/orders";
import Reservations from "./containers/reservations";
import './scss/main.scss';

export default function App() {
    return (
        <React.Fragment>
            <Router>
                <header>
                    <div className="logo-section">
                        <Link to="/" className="links"><span>The Table</span></Link>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <Link to="/home" className="links"><li>About Us</li></Link>
                            <Link to="/reservations" className="links"><li>Reservations</li></Link>
                            <Link to="/login" className="links"><li>Login</li></Link>
                            <Link to="/orders" className="links"><li>Online Order</li></Link>
                        </ul>
                    </nav>
                </header>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/reservations" component={Reservations}/>
                <Route exact path="/"/>
            </Router>
        </React.Fragment>
    );
}