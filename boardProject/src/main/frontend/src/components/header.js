import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header(){

    return(
        <div className="leftHeader">
            <div className='headerTitle'>
                <span className="blogTitle">React Blogggg</span>
            </div>
            <div className='headerContents'>
                <br/><br/>
                <Link to="/login" className='linkTag'>로그인</Link>
                <br/><br/>
                <Link to="/join" className='linkTag'>회원가입</Link>
                <br/>
                <hr/>
                <br/>
                <Link to="/" className='linkTag'>메인페이지</Link>
                <br/><br/>
                <Link to="/board" className='linkTag'>Board로이동</Link>
                <br/><br/>
            </div>
        </div>
    );
}

export default Header;