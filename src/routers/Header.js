import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import logo from '../images/logo.png';
import '../App.css';

const Header = () => (
    <div className="page-header">
        <div className="site-logo">
            <img src={logo} />
        </div>
        <div className="header-link">
            <NavLink to='/Signup' >Sign Up</NavLink>           
        </div>
    </div>
);

export default Header;