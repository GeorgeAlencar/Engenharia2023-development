import React from 'react';
import '../css/style.css';

function Cadastro() {
  return( 
     <div className="main-login">
      <div className="left-login">
          <img id="logo" src="https://i.imgur.com/JV26HY1.png" alt="logoQuest"></img>
      </div>
        <div className="right-login">
            <div className="card-login">
                    <h1>Cadastre-se</h1>
                    <div className="textfield">
                        <input type="text" name="NomeCompleto" id="NomeCompleto" className="inputUser" placeholder="Nome Completo" maxLength="50" required />
                    </div>    
                    <div className="textfield">
                        <input type="email" name="Email" id="Email" className="inputUser" placeholder="E-mail" maxLength="256" required />
                    </div>
                    <div className="textfield">
                        <input type="email" name="ConfirmarEmail" id="ConfirmarEmail" className="inputUser" placeholder="Confirmar E-mail" maxLength="256" required />
                    </div>
                    <div className="textfield">
                        <input type="password" name="Senha" id="Senha" className="inputUser" placeholder="Senha" maxLength="20" required />
                    </div>
                    <div className="textfield">
                        <input type="password" name="ConfirmarSenha" id="ConfirmarSenha" className="inputUser" placeholder="Confirmar Senha" maxLength="20" required />
                    </div>
                    <button className="btn-cadastro">Criar Conta</button>
                    <a href="/Login">
            <button className="btn-login">Login</button>
          </a>
                </div>
            </div>
        </div> 
    );
}

export default Cadastro;
