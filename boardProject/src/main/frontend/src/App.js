import { Route, Routes } from "react-router-dom";
import Board from './components/board';
import Main from './components/main';
import Header from './components/header';

function App(){

  return(
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/board' element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;