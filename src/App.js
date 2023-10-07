import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Regras from './pages/Regras';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Menu2 from './pages/menu2';
import Tabuleiro from './pages/Tabuleiro';
//import SignalR from './SignalR/SignalR';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Regras" element={<Regras />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Menu2" element={<Menu2 />} />
          <Route path="/Tabuleiro" element={<Tabuleiro />} />
{/* /*        <Route path="/Partida" element={<SignalR />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

