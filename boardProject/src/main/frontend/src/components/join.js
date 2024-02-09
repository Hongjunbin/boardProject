//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import './join.css';

function Join(){

    return(
        <div className='join'>
            <div id="join_header">
                <h1>회원가입</h1>
            </div>
            <form action="join" method="post" id="join_form">
                <span>이름</span>
                <input type="text" className='joinInput' name="userName" placeholder="이름" required /><br/><br/>
                <span>아이디</span>
                <input type="text" className='joinInput' id="userId" name="userId" placeholder="아이디" required /><br/><br/>
                <span>비밀번호</span>
                <input type="password" className='joinInput' id="userPwd" name="userPwd" placeholder="비밀번호" required /><br/><br/>
                <span>비밀번호 확인</span>
                <input type="text" className='joinInput' placeholder="비밀번호 확인" required /><br/><br/>
                <span>생년월일(6자)</span>
                <input type="text" className='joinInput' name="birthday" placeholder="ex) 990103" required /><br/><br/>
                <span>전화번호</span>
                <input type="text" className='joinInput' name="phone" placeholder="ex) 01012345678" required /><br/><br/>
                <button type="submit" id="join_button">회원가입</button>
            </form>
        </div>
    );
}

export default Join;