const titulo = document.getElementById('titulo-boas-vindas');
titulo.innerText = "Olá, Jovannyto! Bem-vindo de volta.";
const listaStatus = document.getElementsByClassName('item-status');
// Altera o primeiro parágrafo da classe (índice 0)
listaStatus[0].innerText = "Status da CPU: Online (42°C)";
// Altera o segundo parágrafo da classe (índice 1)
listaStatus[1].innerText = "Status da RAM: 48% em uso";
// Buscando por ID usando a hashtag (#) e injetando HTML estrutura
const notificacao = document.querySelector('#bloco-notificacao');
notificacao.innerHTML = "<strong>Aviso:</strong> Backup concluído com sucesso.";

// Buscando por Classe usando o ponto (.). Ele pegará apenas o primeiro parágrafo status
const primeiroStatus = document.querySelector('.item-status');
primeiroStatus.innerText = "Texto alterado isoladamente pelo querySelector.";
const rodape = document.querySelector('footer');
rodape.innerText = "© 2026 - Desenvolvido em Aula Prática Técnica.";
// Captura TODOS os parágrafos que possuem a classe '.item-status' de uma vez
const todosOsStatus = document.querySelectorAll('.item-status');

// Conseguimos alterar elementos específicos sabendo o índice:
todosOsStatus[0].innerText = "Alterado via querySelectorAll na posição 0";
todosOsStatus[1].innerText = "Alterado via querySelectorAll na posição 1";