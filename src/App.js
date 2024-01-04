import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home Page Hai</div>}/>
        <Route path="/support" element={<div>Support Page Hai</div>}/>
        <Route path="/about" element={<div>About Page Hai</div>}/>
        <Route path="/labs" element={<div>Labs Page Hai</div>}/>
        <Route path="*" element={<div>Not Found Page</div>}/>
      </Routes>
    </div>
  );
}

export default App;
