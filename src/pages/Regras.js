import React from 'react';
import '../css/regras.css';

function Regras() {
    return(
        <div>     
            <div className="main-login">            
            <img id="logo" src="https://i.imgur.com/JV26HY1.png" alt="logoQuest" width="600" height="400"></img>
        </div>              
            <div> 
                <br></br> 
                <h1>Regras do Jogo</h1><br></br> 

                <h4>Como jogar:</h4>
                <p>Os jogadores decidem entre si quem começará o jogo, respondendo a primeira pergunta. A casa <strong>início</strong> do jogo permite a cada jogador na sua vez, escolher o assunto da pergunta que deseja responder.</p><br></br>

                <h4>Fichas de pontuação</h4>
                <p>Antes de responder, o jogador deve escolher entre as fichas de pontuação que tem em mãos quantos pontos deseja ganhar, caso acerte a resposta.</p>                 
                <p>A ficha deverá ser descartada no centro do tabuleiro e ficará lá até que todas as fichas do jogador tenham sido descartadas.</p>                
                <p>Neste momento, é preciso usar um pouco de estratégia porque, caso acerte, o jogador andará no tabuleiro o número de pontos obtidos.</p>
                <p>Ao final de cinco rodadas, todos recuperam suas fichas e continuam o jogo dessa forma, até que um jogador vença a partida.</p><br></br>

                <h4>Resposta errada</h4>
                <p>Ao dar uma resposta errada, o jogador deverá permanecer na mesma casa e responder na rodada seguinte a outra pergunta sobre o mesmo tema, perdendo na rodada a ficha de pontuação escolhida.</p><br></br>

                <h4>Vencedor</h4>
                <p>Vence o jogo o primeiro jogador a chegar à última casa e a responder corretamente à última pergunta sobre o tema escolhido pelo seu adversário</p><br></br><br></br>

                <h2>Cada tema deve ser assim entendido:</h2><br></br>
                
                <h4>M - Mundo</h4> 
                <p>História Geral; Geografia; Fenômenos Naturais; Política; Economia; Turismo e Religião.</p><br></br>

                <h4>AE - Artes e Entrtetenimento</h4>
                <p>Artistas; Cinema; Televisão; Música; Literatura; Pintura e Escultura.</p><br></br>     
                
                <h4>S - Sociedade</h4>
                <p>Personalidades; Celebridades; Costumes; Curiosidades; Negócios; Moda e Gastronomia.</p><br></br>

                <h4>CT- Ciência e Tecnologia</h4>
                <p>Ciências, Física; Química; Matemática; Astronomia; Biologia; Zoologia; Tecnologia e Informática.</p><br></br>

                <h4>EL- Esporte e Lazer</h4>
                <p>Esportistas; Modalidades Esportivas; Eventos Esportivos; Hobbies e Passatempos.</p><br></br>

                <h4>V- Variedades</h4>
                <p>Todas as categorias anteriores com perguntas de múltipla escolha.</p> <br></br>               
            </div>  
            </div>
                
    )
}

export default Regras



