// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo);
        inputAmigo.value = ''; // Limpa o campo de input
        atualizarListaAmigos();
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

// Função para atualizar a lista de amigos exibida na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Sorteia um amigo aleatoriamente
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe a mensagem na tela
    const mensagem = document.createElement('p');
    mensagem.textContent = `O amigo sorteado é ${amigoSorteado}!`;
    resultado.appendChild(mensagem);
}