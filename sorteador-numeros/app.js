function sortear() {                                                                            // função puxada do HTML
    let quantidade = parseInt(document.getElementById('quantidade').value);                     // variável que pega o campo do HTML que preenche a quantidade      
    let de = parseInt(document.getElementById('de').value);                                     // variável que pega o campo do HTML que preenche o inicial do intervvalo       
    let ate = parseInt(document.getElementById('ate').value);                                   // variável que pega o campo do HTML que preenche o final do intervvalo
    
    if (de >= ate) {                                                                            // se o inicial for maior que o fim do intervalo
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');       // alert do if
        return;                                                                                 // return para o código
    }
    
    if ((ate - de) < quantidade){                                                               // se quantidade de números a sortear for maior que o intervalo
        alert('A quantidade de números para sortear é maior do que o intervalo');               // alert do if
        return;                                                                                 // return para o código    
    }
    
    let sorteados = [];                                                                         // cria uma array dos numeros sorteados
    let numero;                                                                                 // somente cria a variável sem declaração
    
    for (let i = 0; i < quantidade; i++) {                                                      // for que sorteia os números até a quantidade dedsejada
        numero = obterNumeroAleatorio(de, ate);                                                 // chama a função para ser executada dentro do intervalo (de, ate)
        
        while (sorteados.includes(numero)){                                                     // while verifica se o numero sorteado já está na array, se true
            numero = obterNumeroAleatorio(de, ate);                                             // sorteia o número novamente e armazena na variável número
        
        }
        sorteados.push(numero);                                                                 // adiciona na array o novo numero sorteado
    }

    let numSorteados = document.getElementById('resultado');                                                // armazena e chama o id resultado do HTML            
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;       // linha do HTML que exibe a mensagem formatada
    alterarStatusBotao();                                                                                   // altera o status do botão
}

function obterNumeroAleatorio(min, max) {                               // cria a função com 2 parâmetros para sortear o número aleatório   
    return Math.floor(Math.random() * (max - min + 1) + min);           // linha que sorteia o número dentro do intervalo escolhido
}

function alterarStatusBotao() {                                         // função que ativa ou desativa o botão
    let botao = document.getElementById('btn-reiniciar')                // aramzena em botao a informação do HTML
    if (botao.classList.contains('container__botao-desabilitado')){     // se no botao conter 'container__botao-desabilitado'
        botao.classList.remove('container__botao-desabilitado');        // remova 'container__botao-desabilitado'
        botao.classList.add('container__botao');                        // adiciona 'container__botao'
    }else{                                                              // se não
        botao.classList.remove('container__botao');                     // remove 'container__botao' 
        botao.classList.add('container__botao-desabilitado');           // adiciona 'container__botao-desabilitado'
    } 
}

function reiniciar(){                                                                                                               // função puxada do HTML
    document.getElementById('quantidade').value = '';                                                                               // deixa vazio o campo da quantidade
    document.getElementById('de').value = '';                                                                                       // deixa vazio o campo de
    document.getElementById('ate').value = '';                                                                                      // deixa vazio o campo ate
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum ainda</label>`;     // reescreve o que mostra os numeros sorteados
    alterarStatusBotao();                                                                                                           // desativa o botão reiniciar
}