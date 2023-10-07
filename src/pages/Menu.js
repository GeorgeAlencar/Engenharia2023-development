import React from 'react';
import { Link } from 'react-router-dom';
import '../css/menu.css';

function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/Home" className="menu-link">Home</Link></li>
                <li><Link to="/Regras" className="menu-link">Regras</Link></li>
                <li><Link to="/Menu" className="menu-link">Menu</Link></li>
                <li><Link to="/Menu2" className="menu-link">Menu2</Link></li>
                <li><Link to="/Login" className="menu-link">Login</Link></li>
                <li><Link to="/Cadastro" className="menu-link">Cadastro</Link></li>
                <li><Link to="/Partida" className="menu-link">Tabuleiro</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;
