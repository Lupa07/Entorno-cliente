//Numero Aleatorio
function numeroAleatorio() {
    document.getElementById("parrafo1").innerHTML = Math.random(10) * 10;

}


//Incrementales

var primero = 1;
var segundo = ++primero;

var primero = 1;
var segundo = primero++;

function incrementales() {

    document.getElementById("parrafo2").innerHTML = primero;
    document.getElementById("parrafo3").innerHTML = segundo;
}


//Mayor de edad introducida por pantalla en cuadro de texto

function edad() {

    let edad = document.getElementById("edad").value;
    //!isNan significo IS NOT A NUMBER
    if (edad < 18 && !isNaN(edad)) {
        alert("es menor de edad ");
    } else if (edad >= 18 && !isNaN(edad)) {
        alert("es mayor de edad");
    } else {
        alert("no ha metido un numero");
    }


}


//nota por pantalla y sacar con palabras
function nota() {
    var notaAlumno = prompt("Introduce la nota");

    switch (Number(notaAlumno)) {

        case 0: case 1: case 2: case 3: case 4:
            alert("suspenso")
            break;
        case 5: case 6:
            alert("aprobado")
            break;
        case 7: case 8:
            alert("notable")
            break;
        case 9: case 10:
            alert("Sobresaliente")
            break;
        default: alert("Nota erronea")

    }


}


//impares hasta x numero
function impares() {
    var numeroEmpezar = 1;
  
  
    while (numeroEmpezar <= 20) {
      if (numeroEmpezar % 2 != 0) {
  
        console.log(numeroEmpezar);
      }
  
      numero++;
    }
  }

  function numeroImpar() {
    var cadena = " ";
    var impares = 1;
    var max = 20;
  
    while (impares <= max) {
      if (impares % 2 != 0) {
        console.log(impares);
        cadena = cadena + " " + impares;
      }
      impares++;
    }
  
    document.getElementById("impares").innerHTML = cadena;
  
  }

//primos
  function primos() {
    var inputNumber = document.getElementById("numprimo").value;
    if (isNaN(Number(inputNumber))) {
        alert("No me trolees!!");
        return;
    }
 
    while (!esPrimo(inputNumber)) {
        inputNumber++;
    }
    alert("Siguiente primo: " + inputNumber);
}
 
function esPrimo(numprimo){
    for (var i = 2; i < numprimo; i++) {
        if (numprimo%i==0){
            return false;
        }
    };
    return true;
}

/* con while solo

function primos() {
var numero=document.getElementById("num").value;
numero=numero+1;
var salida=false;
var indice=1;

while (salida===0){
  indice++;
  while(numero%indice===0){
    if(numero==indice){
      salida=true;
      break;
    }else{
      indice=1;
      numero++;
      break;
    }
  }
}

alert("El siguiente numero primo es "+numero);
}

*/



//sacar vertical por consola
function vertical() {

    var numero=document.getElementById("numv").value;
    while (numero>0){
      var resto=numero%10;
      numero=parseInt (numero/10);
      console.log(resto);
      
    
    }

    
}




//tabla del uno al 10

function tabla() {

    for (i = 0; i < 10; i++) {

        document.write("el valor de la variable es " + i + "<br>");
    }


    for (i = 1; i <= 10; i++) {
        document.write("<br>");
        document.write("<b>Tabla del " + i + "</b><br>");
        document.write("---------------<br>");
        for (j = 1; j <= 10; j++) {
            document.write("<span>" + i + " x " + j + " = " + (j * i) + "</span><br>");
        }
    }

    for (i = 1; i <= 10; i++) {
        document.write("<br>");
        document.write("<br>");
        document.write("<b>Tabla del " + i + "</b><br>");

        document.write("---------------<br>");
        for (j = 1; j <= 10; j++) {
            document.write(i + " x " + j + " = " + (j * i) + " || ");
        }
    }

}



//MOSTRAR PRIMOS


var numero7 = document.getElementById("primo3").value;
function esPrimo(numero7) {
    for (var i = 2; i < numero7; i++) {
        if (numero7 % i == 0) {
            return false;
        }
    };
    return true;
}


function mostrarprimos() {
    for (var i = 2; i <= 23; i++) {

        if (esPrimo(i)) {
            document.write(i);
            document.write("||");

        }

    }

}

function mostrarprimosalreves() {
    for (var i = 23; i >= 2; i--) {
        if (esPrimo(i)) {
            document.write(i);
            document.write("||");
        }

    }

}


//Realiza un script que pida cadenas de texto y las concatene 
//usando el carácter “-” cada vez que el usuario pulse “Seguir”
// y hasta que se pulse “Cancelar”. Al salir con “Cancelar” 
//deben mostrarse todas las cadenas concatenadas.


var cadena2 ="";

function encadenar2() {
    do {
        var palabra2 = prompt("introduce una palabra");

        var confirmar = confirm("¿quiere seguir?");

        if (confirmar == true) {
            cadena2 = cadena2 + palabra2 + "-";
        } else {
            cadena2 = cadena2 + palabra2;
        }


    } while (confirmar == true);

    alert(cadena2);
}

//si falla mirar el ejemplo10



//BISIESTOS

function bisiesto(){

    var anyo=prompt("introduce año");


    if ((anyo%400 ==0) || (anyo%4==0 && anyo%100!=0)){
      alert("es bisiesto");
  }else{
    alert ("no es bisiesto");
  }
  
  }

  //DIVISION
  function division(){

    var dividendo=prompt("Introduce el dividendo: ");
    var divisor=prompt("Introdice el divisor");
    var resultado;
    
    divisor!=0 ? resultado=dividendo/divisor:
      alert("No es posible la división por cero");
      alert("El resultado es: "+resultado);
    
    }


    var articulo2="";

    function añadir2(){
    
   articulo2= document.getElementById("articulos2").value;
   var listado="<li>"+articulo2+"</li>";
   document.getElementById("prueba2").innerHTML+=listado;

}


//CALCULADORA


var numero1=0;
var numero2=0;
var suma2=0;

function suma(){
        
   numero1= document.getElementById("numero1").value;
  
   numero2= document.getElementById("numero2").value;
   
   if( isNaN(numero1) || isNaN(numero2)){
      alert("No has introducido los valores correctamente");
      document.getElementById("resultado").innerHTML="";
   }else{
    suma2= Number(numero1) +Number(numero2);
    document.getElementById("resultado").innerHTML=suma2;
   alert(suma2);
   }
}

var segundovalor;
var primervalor;

function calculadora(){
    primervalor=document.getElementById("texto1").value;
    segundovalor=document.getElementById("texto2").value;

    
    suma(primervalor,segundovalor);
    resta(primervalor,segundovalor);
    multi(primervalor,segundovalor);
    divis(primervalor,segundovalor);
}

function suma(segundovalor, primervalor){
    
   var valorInt1= parseInt(primervalor);
   var valorInt2= parseInt(segundovalor);

   var resultadosum= valorInt1+valorInt2;
    document.getElementById("resultadoSuma").innerHTML +=resultadosum;
    
}
function resta(primervalor,segundovalor){
    
    var valorInt1= parseInt(primervalor);
    var valorInt2= parseInt(segundovalor);
 
    var resultadores= valorInt1+(-valorInt2);
     document.getElementById("resultadoResta").innerHTML +=resultadores;
     
 }
 function multi(segundovalor, primervalor){
    
    var valorInt1= parseInt(primervalor);
    var valorInt2= parseInt(segundovalor);
 
    var resultadomult= valorInt1*valorInt2;
     document.getElementById("resultadoMulti").innerHTML +=resultadomult;
     
 }
 function divis( primervalor,segundovalor){
    
    var valorInt1= parseInt(primervalor);
    var valorInt2= parseInt(segundovalor);
 
    var resultadodiv= valorInt1/valorInt2;
     document.getElementById("resultadoDivision").innerHTML +=resultadodiv;
     
 }
