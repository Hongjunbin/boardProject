import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './board.css';
//import { useNavigate } from 'react-router-dom';

function Board(){

    const [hello, setHello] = useState('');
    useEffect(() => {
        axios.get('/board')
            .then((res) => {
                setHello(res.data);
            })
    }, []);

    const [like, setLike] = useState(0);
    function likeUpDown(){
        setLike(like + 1);
    }

    return(
        <div className='boardBorder'>
            {hello}
            <div>
                <ul>
                    <li>
                        <span>junbin</span><span onClick={likeUpDown}>👍{like}</span>
                        <div>글제목은 이렇게 짓는 겁니다.</div>
                        <div>2023/01/22</div>
                        <hr/>
                    </li>
                    <li>
                    <span>junbin</span><span>👍0</span>
                        <div>글제목은 이렇게 짓는 겁니다.</div>
                        <div>2023/01/22</div>
                        <hr/>
                    </li>
                    <li>
                    <span>junbin</span><span>👍0</span>
                        <div>글제목은 이렇게 짓는 겁니다.</div>
                        <div>2023/01/22</div>
                        <hr/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Board;