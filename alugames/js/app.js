function alterarStatus(id){                                                                         // função ativada quando clicamos no botão
    let gameClicado = document.getElementById(`game-${id}`);                                        // chama o game pelo id que só muda o número do jogo
    let imagem = gameClicado.querySelector('.dashboard__item__img');                                // chama pelo elemento class do css a imagem que deve ser alterada se o jogo estiver alugado ou não
    let botao = gameClicado.querySelector(".dashboard__item__button");                              // chama pelo elemento class do css o botão em si
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');                             // cria a variável para pegarmos o nome do jogo
    let jogosAlugados = 0;                                                                          // contador de jogos alugados inicialmete 0

    if (botao.classList.contains("dashboard__item__button--return")) {                              // se o botão conter "dashboard__item__button--return", executa:
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){       // confirma se deseja devolver o jogo
            botao.textContent = "Alugar";                                                           // muda o texto do botão para poder alugar novamente
            botao.classList.remove("dashboard__item__button--return");                              // muda a aparência do botão para a cor azul novamente
            imagem.classList.remove('dashboard__item__img--rented');                                // remove a imagem opaca quando já está alugado
        }
    } else {                                                                                        // se não
        botao.textContent = "Devolver";                                                             // muda o conteúdo do botão pra Devolver                                                          
        botao.classList.add("dashboard__item__button--return");                                     // adiciona a cor escura o botão
        imagem.classList.add('dashboard__item__img--rented');                                       // adiciona a imagerm opaca
        jogosAlugados++;                                                                            // adiciona +1 nos jogos alugados
        console.log(jogosAlugados);                                                                 // verifica no console os jogos alugados
    }   
}