let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
    let mensagemAcerto = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
    
    if(chute == numeroAleatorio) {
        inserirTextoNaTag('h1', 'Acertou!');
        inserirTextoNaTag('p', mensagemAcerto);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroAleatorio) {
            inserirTextoNaTag('p', 'O número secreto é menor');
        } else {
            inserirTextoNaTag('p', 'O número secreto é maior');
        }

        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function inserirTextoNaTag(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial() {
    inserirTextoNaTag('h1', 'Jogo do número secreto');
    inserirTextoNaTag('p', 'Digite um número entre 1 e 10');
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();

    document.getElementById('reiniciar').setAttribute('disabled', true);

    tentativas = 1;
}