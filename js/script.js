class Calculadora{
    constructor(textoOperandoActual, textoOperandoAnterior){
        this.textoOperandoActual = textoOperandoActual;
        this.textoOperandoAnterior = textoOperandoAnterior;
        this.allClear();
    };

    allClear(){
        this.textoOperandoActual = '';
        this.textoOperandoAnterior = '';
        this.operacion = undefined;
    };

    delete(){

    };

    addNumber(numero){

    };

    elejirOperacion(operacion){

    };

    computar(){

    };

    updateDisplay(){

    };
};



const botonesNumeros = document.querySelectorAll('[data-numeros]');
const botonesOperadores = document.querySelectorAll('[data-operadores]');
const botonIgual = document.querySelector('[data-igual]');
const botonAC = document.querySelector('[data-ac]');
const botonDel = document.querySelector('[data-del]');
const textoOperandoActual = document.querySelector('[data-operando-actual]');
const textoOperandoAnterior = document.querySelector('[data-operando-anterior]');