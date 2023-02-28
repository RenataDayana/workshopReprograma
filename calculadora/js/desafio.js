
    var inputValorHora = document.querySelector('#valor-hora');
    

    var inputHorasProjeto = document.querySelector('#horas-projeto');

    var  spanValorTotalProjeto = document.querySelector('#resposta');

    function calcular (){       

        var valorTotalDoProjeto = (inputHorasProjeto.valueAsNumber * inputValorHora.valueAsNumber).toFixed(2);
        spanValorTotalProjeto.textContent = 'R$ ' + valorTotalDoProjeto;

}

    
    