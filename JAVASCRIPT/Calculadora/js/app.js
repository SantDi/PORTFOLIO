function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB']
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operacion es inconclusa';
    forma.querySelector('#Resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function restar(){
    const forma2 = document.getElementById('forma2');
    let operandoA = forma2['operandoA'];
    let operandoB = forma2['operandoB']
    let resultado2 = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado2))
        resultado2 = 'La operacion es inconclusa';
    forma2.querySelector('#Resultado2').innerHTML = `Resultado: ${resultado2}`;
    console.log(`Resultado: ${resultado2}`);
}

function multiplicar(){
    const forma3 = document.getElementById('forma3');
    let operandoA = forma3['operandoA'];
    let operandoB = forma3['operandoB']
    let resultado3 = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado3))
        resultado3 = 'La operacion es inconclusa';
    forma3.querySelector('#Resultado3').innerHTML = `Resultado: ${resultado3}`;
    console.log(`Resultado: ${resultado3}`);
}

function dividir(){
    const forma4 = document.getElementById('forma4');
    let operandoA = forma4['operandoA'];
    let operandoB = forma4['operandoB']
    let resultado4 = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado4))
        resultado4 = 'La operacion es inconclusa';
    forma4.querySelector('#Resultado4').innerHTML = `Resultado: ${resultado4}`;
    console.log(`Resultado: ${resultado4}`);
}