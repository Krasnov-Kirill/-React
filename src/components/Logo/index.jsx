import React from 'react';
import logo from './img/blog.svg';

const Logo = () => {
    return (
        <a href="/" className="logo">
            <img alt="Blog" src={logo} className="logo__pic"/>
        </a>
    )
}

export default Logo;