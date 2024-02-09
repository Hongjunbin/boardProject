import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './boardSerchList.css';
function BoardSerchList(){

    const [search, setSearch] = useState([]);
    useEffect(() => {
        axios.get('/search')
            .then((res) => {
                setSearch(res.data);
            })
    }, []);

    // const [like, setLike] = useState(0);
    // function likeUpDown(){
    //     setLike(like + 1);
    // }

    // const [boardDetailValue, setBoardDetailValue] = useState([]);
    // const [isShow, setIsshow] = useState(false)
    
    // function boardTitleClick(boardNo){
    //     setBoardDetailValue(search.find((v) => v.boardNo === boardNo));
    //     setIsshow(true);
    //     console.log(boardDetailValue);
    // }

    return(
        <div className='boardBorder'>
            {search}
            {/* <div className='boardList'>
                <div className='boardHeader'>
                    헤더임.
                </div>
                <ul>
                    {board.map(item => (
                        <li className='liTag' key={item.boardNo} onClick={() => {boardTitleClick(item.boardNo)}}>
                            <span>작성자 : {item.userName}</span>
                            <span onClick={likeUpDown}>👍{like}</span>
                            <div>제목 : {item.boardTitle}</div>
                            <div>2023/01/22</div>
                            <hr/>
                        </li>
                    ))}
                </ul>
            </div>
            {isShow === true ? 
            <div className='boardDetail'>
                <div className='boardDetailHeader'>
                    게시글번호 : {boardDetailValue.boardNo}<br/>
                    작성자 : {boardDetailValue.userName}<br/>
                    게시글 제목 : {boardDetailValue.boardTitle}<br/>
                    게시글 작성일 : {boardDetailValue.boardDate}<br/>
                </div>
                <div className='boardDetailContent'>
                    게시글 : {boardDetailValue.boardWriting}<br/>
                </div>
            </div>: null} */}
        </div>
    );
}

export default BoardSerchList;