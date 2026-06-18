const titulo = document.getElementById("titulo-exercicio")
titulo.innerText = "Dominando o DOM I!";

const rodape = document.querySelector('footer');
rodape.innerText = "© 2026 - Desenvolvido em Aula Técnica"

const textOri = document.querySelector('#info-principal');
const textOri2 = document.querySelector('.descricao-sistema');

textOri.innerText = "Seletor verificado e atualizado com sucesso!"

const painel = document.querySelector("#painel-noticias")
painel.innerHTML = "<h3>Alertas urgentes</h3><p>Status de carregamento: <strong>Concluído</strong></p>"


const namer = document.getElementsByClassName("notificacao")
namer[1].innerText = "Apenas este bloco foi modificado pelo índice!"

const sensores = document.querySelectorAll(".sensor")
sensores[0].innerText = "Sensor 1: Ativo"
sensores[1].innerText = "Sensor 2: Em Manutenção"


const consolador = document.querySelector("#mensagem-captura")
console.log(consolador);



const status2 = document.getElementById("status-geral")
const seg = document.querySelector(".log-mensagem")
const paragrafo = document.getElementById("container-relatorio")
status2.innerText = "Status: OPERACIONAL"
seg.innerText =  "Varredura de segurança concluída com sucesso."
paragrafo.innerHTML = "<h3>Relatório de Conexão</h3><ol>cpu:sim</ol><ol>grpu:sim</ol><ol>ram:sim</ol>"




