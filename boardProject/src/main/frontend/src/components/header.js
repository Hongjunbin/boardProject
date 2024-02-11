import React, { useState } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

function Header(){

    const navigate = useNavigate();

    const [keyword, setKeyword] = useState();

    return(
        <div className="leftHeader">
            <div className='headerTitle'>
            <Link to="/" className='blogTitle'>React Blogggg</Link>
            </div>
            <div className='hea`derContents'>
                <br/>
                <div>
                <Link to="/login" className='linkTag'>로그인</Link>
                </div>
                <Link to="/join" className='linkTag'>회원가입</Link>
                <br/>
                <hr/>
                <div>
                    <input onChange={(e)=>{
                        setKeyword(e.target.value);
                    }}/>

                    <button onClick={()=>{
                        if(keyword === ''){
                            return alert('검색어를 입력해주세요!');
                        }
                        navigate('/board', {state : {keyword : keyword}});

                    }}>전송</button>
                </div>
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