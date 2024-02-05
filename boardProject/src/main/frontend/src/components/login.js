//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import './login.css';

function Login(){

    return(
        <div className='login'>
            <div className="login_header">
                <h1>로그인</h1>
            </div>
            <form action="login" method="post" id="login_form">
                <input type="text" id="userId" name="userId" placeholder="아이디" required /> <br/><br/>
                <input type="password" id="userPwd" name="userPwd" placeholder="비밀번호" required /> <br/>
                <span></span><br/>
                <button type="submit" id="login_button">로그인버튼쓰</button>
            </form>
        </div>
    );
}

export default Login;