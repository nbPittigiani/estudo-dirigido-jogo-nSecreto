let listasNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

exibirMsgInicial();

function verificarChute() {
    let numeroEscolhido = document.querySelector('input').value;
    console.log(numeroSecreto);
    if (numeroEscolhido == numeroSecreto) {
        exibirTxtTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com 
        ${tentativas} ${palavraTentativa}`;
        exibirTxtTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        numeroSecreto = gerarNumeroAleatorio();
    } else {
        if (numeroEscolhido > numeroSecreto) {
            exibirTxtTela('p', 'O número secreto é menor');
        } else {
            exibirTxtTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function exibirMsgInicial() {
    exibirTxtTela('h1', 'Jogo do Numero Secreto');
    exibirTxtTela('p', 'Escolha um numero entre 1 e 10');
}

function exibirTxtTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 4 + 1);
    if (listasNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    } else {
        listasNumerosSorteados.push(numeroEscolhido);
        console.log(listasNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {

    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}