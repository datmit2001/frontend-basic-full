import React, { useState, useEffect} from 'react'
import {
    NavLink, useHistory
} from 'react-router-dom';

import { signOut, isAuthenticated } from '../auth';
import { useLocation } from 'react-router-dom'
const MenuHome = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [ isLogged, setIsLogged ] = useState(false);
    useEffect(() => {
        isAuthenticated() && setIsLogged(true);
    },[pathname,isLogged])
    // console.log(pathname);
    return (
        <div>
            <nav className="navigation-menu">
                <ul>
                    <li> <NavLink to="/" style={{ textDecoration: 'none' }} className="header-right-menu">Home page</NavLink></li>
                    <li> <NavLink to="/product" style={{ textDecoration: 'none' }} className="header-right-menu">Product</NavLink></li>
                    <li>  <NavLink to="/about" style={{ textDecoration: 'none' }} className="header-right-menu">About</NavLink></li>
                    <li>  <NavLink to="/admin/dashboard" style={{ textDecoration: 'none' }} className="header-right-menu">Dashboard</NavLink></li>
                    {!isLogged && (
                        <>
                            <li> <NavLink to="/signin" style={{ textDecoration: 'none' }} className="header-right-menu">Sign In</NavLink></li>
                            <li> <NavLink to="/signup" style={{ textDecoration: 'none' }} className="header-right-menu">Sign Up</NavLink></li>
                        </>
                    )}
                    {isLogged && (
                        <li> <a className="nav-link" activeClassName="active" style={{ cursor: 'pointer' }} onClick={() => signOut(() => {
                            setIsLogged(false);
                            history.push('/')
                        })}>Sign Out</a></li>
                    )}

                </ul>
            </nav>

        </div >
    )
}

export default MenuHome
