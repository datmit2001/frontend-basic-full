import React from 'react'
import {
    NavLink, useHistory
} from 'react-router-dom'
import { signOut } from '../auth';
import MenuHome from './MenuHome';
const Header = () => {
    const history = useHistory();
    return (
        <div>
            {/*Topbar*/}
            <div className="header-topbar">
                <div className="header-topbar-inner">
                    {/*Topbar Left*/}
                    <div className="topbar-left hidden-sm-down">
                        <div className="phone"><i className="fa fa-phone left" aria-hidden="true" />Customer Support : <b>+77 7565 348 576</b></div>
                    </div>
                    {/*End Topbar Left*/}
                    {/*Topbar Right*/}
                    <div className="topbar-right">
                        <ul className="list-none">
                            <li>
                                <a href="/">Philos</a>
                            </li>
                        </ul>
                    </div>
                    {/* End Topbar Right */}
                </div>
            </div>
            {/*End Topbart*/}
            {/* Header Container */}
            <div id="header-sticky" className="header-main">
                <div className="header-main-inner">
                    {/* Logo */}
                    <div className="logo">
                        <a href="/">
                            <img src="img/logo_black.png" alt="Philos" />
                        </a>
                    </div>
                    {/* End Logo */}
                    {/* Right Sidebar Nav */}
                    <div className="header-rightside-nav">
                        {/* Login-Register Link */}
                        <div className="header-btn-link hidden-lg-down"><a href="#" className="btn btn-sm btn-color">Buy Now</a></div>
                        {/* End Login-Register Link */}
                        {/* Sidebar Icon */}
                        <div className="sidebar-icon-nav">
                            <ul className="list-none-ib">
                                {/* Search*/}
                                <li><a id="search-overlay-menu-btn"><i aria-hidden="true" className="fa fa-search" /></a></li>
                                {/* Whishlist*/}
                                <li><a className="js_whishlist-btn"><i aria-hidden="true" className="fa fa-heart" /><span className="countTip">0</span></a></li>
                                {/* Cart*/}
                                <li><a id="sidebar_toggle_btn">
                                    <div className="cart-icon">
                                        <i aria-hidden="true" className="fa fa-shopping-bag" />
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                        {/* End Sidebar Icon */}
                    </div>
                    {/* End Right Sidebar Nav */}
                    {/* Navigation Menu */}
                   <MenuHome />
                    {/* End Navigation Menu */}
                </div>
            </div>
            {/* End Header Container */}
        </div>

    )
}

export default Header
