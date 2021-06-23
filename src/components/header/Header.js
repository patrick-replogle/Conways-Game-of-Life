import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    const location = useLocation();

    return (
        <div className="header">
            <h1>Conway's Game of Life</h1>
            {location.pathname !== '/about' ? (
                <Link to="/about">About</Link>
            ) : (
                <Link to="/">Home</Link>
            )}
        </div>
    );
};

export default Header;
