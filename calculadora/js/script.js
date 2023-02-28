/* O nome da variável não precisa ter input, só estamos usando para sinalizar que vai ser algo */
var inputGanhoPorMes = document.querySelector('#ganho-mes');

var inputHorasPorDia = document.querySelector('#horas-dia');

var spanHora = document.querySelector('.secao-hora .secao__rodape__valor span');

/* A Function faz os calculos com base nas informações fornecidas pelo usuário */

function calcularValorHora() {
    var qtdTotalDeHoras = inputHorasPorDia.valueAsNumber * 22;
    var valorDeHora = (inputGanhoPorMes.valueAsNumber /qtdTotalDeHoras).toFixed(2);
    spanHora.textContent = 'R$ ' + valorDeHora;
};
