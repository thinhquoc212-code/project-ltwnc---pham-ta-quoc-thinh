import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from './Component/Content';
import Homepage from './homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} /> {/*Trang chủ*/}
         {/* Thêm các route khác nếu cần */}    
         <Route path="/content" element={<Content />} /> {/*Trang nội dung*/}
      </Routes>
    </BrowserRouter>
  );
}
export default App;