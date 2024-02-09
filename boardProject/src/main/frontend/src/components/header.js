import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header(){

    return(
        <div className="leftHeader">
            <div className='headerTitle'>
            <Link to="/" className='blogTitle'>React Blogggg</Link>
            </div>
            <div className='headerContents'>
                <br/>
                <div>
                <Link to="/login" className='linkTag'>로그인</Link>
                </div>
                <Link to="/join" className='linkTag'>회원가입</Link>
                <br/>
                <hr/>
                <form action='/search' method="get">
                    <input type="text" name='keyword' placeholder='검색'/>
                </form>
                <br/>
                <Link to="/board" className='linkTag'>Board로이동</Link>
                <hr/>
                <br/>
                <Link to="/chat" className='linkTag'>채팅방 이동</Link>
                <br/><br/>
            </div>
        </div>
    );
}

export default Header;