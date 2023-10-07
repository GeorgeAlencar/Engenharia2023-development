import React from 'react';
import '../css/style.css';

function Login() {
  return (
    <div className="main-login">
      <div className="left-login">
          <img id="logo" src="https://i.imgur.com/JV26HY1.png" alt="logoQuest"></img>
      </div>
      <div className="right-login">
          <div className="card-login">
              <h1>Jogador!</h1>
              <h1>Faça seu Login!</h1>
              <div className="textfield">
                  <input type="email" name="login" id="login" className="inputUser" placeholder="E-mail" maxLength="256" required />
              </div>
              <div className="textfield">
                  <input type="password" name="senha" id="senha" className="inputUser" placeholder="Senha" maxLength="20" required />
              </div>
              <button className="btn-login">Login</button>
              <a href="Cadastro" id="Cadastro">Não está registrado? Cadastre-se!</a>
              <br />                
          </div>
      </div>
   </div> 
  );
}

export default Login;
