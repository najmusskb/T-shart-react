import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
<Link to='/'>Home</Link>
<Link to='/Orders'>Order</Link>
<Link to='/Abouts'>About</Link>
            
        </nav>
    );
};

export default Header;