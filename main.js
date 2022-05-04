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

function Salvar(data, matricula, nomeCliente, tipoCliente, funcionario, servico) {
    data.textContent = this.data;
    matricula.textContent = this.matricula;
    nomeCliente.textContent = this.nomeCliente;
    tipoCliente.textContent = this.tipoCliente;
    funcionario.textContent = this.funcionario;
    servico.textContent = this.servico;
    alert('Informações salvas!');

}
salvar.addEventListener('click', Salvar);