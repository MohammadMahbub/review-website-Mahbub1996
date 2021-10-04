import React from 'react';
import Logo from '../../../imgs/ICON/Logo.png';
import {Link} from 'react-router-dom';


const Nav = () => {
    return (

        <div className="sticky-top my-nav">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <div className="container ">
                    <a href="#" className="navbar-brand"><img src={Logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/all-course">All Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#footer-area">Blog</Link>
                            </li>
                            <li className="nav-item m-auto">
                                <button className="nav-link button sign-in">Sign in</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;