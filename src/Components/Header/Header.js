import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                {
                    user?.email?
                        <span>
                            <NavLink to='/myOrders'>My Orders</NavLink>
                            <NavLink to='/manageOrder'>All Orders</NavLink>
                            <NavLink to='/addService'>Add Service</NavLink>
                            <span style={{ color: 'rgb(200,200,100)' }}>Hello, {user.displayName} </span>
                            <Button onClick={logout} variant="secondary" size="sm">Logout</Button>
                        </span>
                        :
                        <NavLink to="/login">Login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;