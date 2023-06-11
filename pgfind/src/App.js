import './App.css';
import Hero from './pages/home/hero'
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard';


import { BrowserRouter,Routes, Route } from 'react-router-dom';
function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<Login/>}/>
          
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
    
  );
}

export default App;
