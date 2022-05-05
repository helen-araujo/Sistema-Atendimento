var data;
var matricula;
var nomeCliente;
var tipoCliente;
var funcionario;
var servico;
var bottonSalvar;
var tableData;

var imprimirData;
var imprimirMatricula;
var imprimirNomeCliente;
var imprimirTipoCliente;
var imprimirFuncionario;
var imprimirServico;


//Variaveis para receber valor input->
data = document.querySelector('[data-id="data"]');
matricula = document.querySelector('[data-id="matricula"]');
nomeCliente = document.querySelector('[data-id="nomeCliente"]');
tipoCliente = document.querySelector('[data-id="tipoCliente"]');
funcionario = document.querySelector('[data-id="funcionario"]');
servico = document.querySelector('[data-id="servico"]');
tableData = document.querySelector('[data-id="tableData"]');

//Variaveis para imprimir na tela de acordo com a classe->
imprimirData = document.querySelector('.data');
imprimirMatricula = document.querySelector('.matricula');
imprimirTipoCliente = document.querySelector('.tipoCliente');
imprimirNomeCliente = document.querySelector('.nomeCliente');
imprimirServico = document.querySelector('.servico');
imprimirFuncionario = document.querySelector('.funcionario');

console.log('Teste');
bottonSalvar = document.querySelector('[data-id="bottonSalvar"]');

bottonSalvar.addEventListener('click', salvar);

function salvar() {
    imprimirData.textContent = data.value;
    imprimirMatricula.textContent = matricula.value;
    //Passar valores de uma tag selector->
    imprimirTipoCliente = tipoCliente.options[tipoCliente.selectedIndex].imprimirTipoCliente;
    imprimirNomeCliente.textContent = nomeCliente.value;
    imprimirServico.textContent = servico.value;
    imprimirFuncionario = funcionario.options[funcionario.selectedIndex].imprimirFuncionario;
    console.log('Informações registradas');

}