//Funcion suma
function suma (a,b){
    return a+b;
}

//Funcion resta
function resta (a,b){
    return a-b;
}

//Funcion multiplicacion
function multiplicacion (a,b){
    return a*b;
}

//Funcion division
function division (a,b){
    if(b===0){
        return "Error en la división, ningun numero es divisible entre 0"
    }
    return a/b;
}

//funcion calculadora
function calculadora(num1, num2, operacion){
    switch(operacion){
        case 'suma':
            return suma (num1,num2);
        case 'resta':
            return resta (num1,num2);
        case 'multiplicacion':
            return multiplicacion (num1,num2);
        case 'division':
            if(num2!==0){
                return division (num1,num2);
            }else{
                return "Error en la división, ningun numero es divisible entre 0"                
            }
    }
}
let numero1 = parseFloat(prompt("Ingrese primer numero"));
let numero2 = parseFloat(prompt("Ingrese segundo numero"));
let operacion = prompt("Ingrese operación a realizar(suma,resta,division o multiplicacion)");

let resultado = calculadora(numero1, numero2, operacion);
document.write("El resultado es:  " + resultado);