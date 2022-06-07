import Main from './pages/Main.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './pages/Info.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App;
