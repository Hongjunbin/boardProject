import { Route, Routes } from "react-router-dom";
import Board from './components/board';
import Main from './components/main';
import Header from './components/header';
import Login from './components/login';
import Join from './components/join';

function App(){

  return(
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/board' element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;