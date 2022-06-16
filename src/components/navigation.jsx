import React from 'react';

import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Navigate
                </button>
                <div className='collapse navbar-collapse  navcontent' id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='navlink' to='/'>@JIOrdesta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='navlink' to='/services'>@Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='navlink' to='/contact'>@Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='navlink' to='/projects'>@Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navigation;