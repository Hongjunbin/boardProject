import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header(){

    return(
        <div>
            <div className="header">
                <span className="blogTitle">React Blog</span>
            </div>
            <div className="leftContent">
                <Link to="/" className='linkTag'>메인페이지</Link>
                <br /><br />
                <Link to="/board" className='linkTag'>Board로이동</Link>
            </div>
            <div className="leftContent2"></div>
            <br></br>
        </div>
    );
}

export default Header;