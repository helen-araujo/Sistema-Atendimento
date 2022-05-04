var data;
var matricula;
var nomeCliente;
var tipoCliente;
var funcionario;
var servico;

data = document.querySelector('[data-id="data"]');
matricula = document.querySelector('[data-id="matricula"]');
nomeCliente = document.querySelector('[data-id="nomeCliente"]');
tipoCliente = document.querySelector('[data-id="tipoCliente"]');
funcionario = document.querySelector('[data-id="funcionario"]');
servico = document.querySelector('[data-id="servico"]');
tableData = document.querySelector('[data-id="tableData"]');

function salvar(data, matricula, nomeCliente, tipoCliente, funcionario, servico) {
    tableData.textContent = data.value;

}
salvar.addEventListener('click', salvar(data);
