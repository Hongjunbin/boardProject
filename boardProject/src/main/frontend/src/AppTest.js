// //import { useEffect, useState } from 'react';
// //import './App.css';
// //import axios from 'axios';
// import Header from "./components/header";
// import Content from "./components/content";

// function App() {

//   // const [hello, setHello] = useState('');

//   // useEffect(() => {
//   //     axios.get('/api/test')
//   //         .then((res) => {
//   //             setHello(res.data);
//   //         })
//   // }, []);


//   return (
//     <div>
//       <Header />
//       <Content />
//     </div>
//   );
// }

// export default App;






// import { useState } from 'react';
// import './App.css';
// import Wood from './wood';

// // 1. 실행 과정
// // 2. JSX 문법
// // 자바스크립트 문법안에 html문법이 들어감
// // html 문법을 자바스크립트 안에 넣을 수 있게 만들어진 문법임.

// // (1) return시에 하나의 Dom만 리턴할 수 있다.
// // (2) 변수선언은 let혹은 const로만 해야함. let = 변수 const = 상수(불변)
// // (3) jsx에서는 if사용 불가능 -> 대신 삼항연산자 사용 가능.
// // (조건 ? 값(true) : 값(false))
// // (4) 조건부 렌더링(조건 && 값(true일때만)) : &&
// // &&를 붙히면 true일때만 보여주고 false경우 안보여줌.

// function App() {
  
//   let [title, b] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
//   let [따봉, 따봉변경] = useState(0);
//   let [따봉2, 따봉변경2] = useState(0);
//   let [따봉3, 따봉변경3] = useState(0);
  
//   const abc = [18,2,3];
//   // for(let i = 0; i < abc.length; i++){
//   //   console.log(abc[i]);
//   // } // JSX문법에서는 못씀
//   // abc.forEach(function(n){ console.log(n)}); // 리턴 못함.
//   const b5 = abc.map(function(n){return n;});
//   console.log(b5);
//   // 스프레드 연산자는 값 하나하나를 가공할 수 있는 장점이 있음.
//   const list = [1,2,3];

//   const users = [
//     {id:1, name:"홍준식", phone:"1232133"},
//     {id:2, name:"길동이", phone:"413443"},
//     {id:3, name:"빈빈2", phone:"31233333333"}
//   ];

//   const updateUserDto = {
//     id:2, name:"유저유저1"
//   };
  
//   const newUsers = users.map(function(u){return u.id === updateUserDto.id ? {...u, ...updateUserDto} : u});
//   console.log("newUsers", newUsers);
  
//   // users[1].name = updateUserDto.name;
//   // console.log(users);

//   // const a6 = { id:1, name:"홍길동동이"};
//   // const b6 = {...a6, name:"안녕"};
//   // console.log(b6);

//   let [num, setNum] =  useState(1);

//   return (
//     <div>
//       <h1>숫자 : {num}</h1>
//       <button onClick={function(){ setNum(num + 1)}}>더하기</button>

//       <div>{list.map((n)=> n)}</div>
//       <div>달</div>
//       <Wood />
//       <h4>{title[0]} <span onClick={function(){ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
//       <hr />
//       <h4>{title[1]} <span onClick={function(){ 따봉변경2(따봉2+1) }}>👍</span> {따봉2} </h4>
//       <hr />
//       <h4>{title[2]} <span onClick={function(){ 따봉변경3(따봉3+1) }}>👍</span> {따봉3} </h4>
//       <hr />
//     </div>
//   );
// }

// export default App;