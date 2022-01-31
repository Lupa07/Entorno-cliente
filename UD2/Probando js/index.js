


function anios(){

    var anios=prompt("Introduce el año");
    if((anios%400 ==0)|| (anios%4==0 && anios/100!=0)){
         alert("Es bisisesto");
        }else{
            alert("Este anio no es bisiesto");
        }
}

function mayorEdad(){
    
    
    document.getElementById("caja").nodeValue;
    if(caja>=18){
        alert("Es mayor de edad");
    }else{
        alert("es menor de edad");
    }
}

function numerito(){
    var nuemro= document.getElementById("noNumero").value;
    
    if ( isNaN(nuemro)){
        
        alert("Eso no es un numero");
    }else {
        alert("Esto si que es un numero")
    }
}

function notaAlumno(){

    var notita= document.getElementById("nota").value;
    
    switch (Number(notita)){
        case 0: case 1:  case 2:  case 3: case 4:
            alert("Estas suspenso");
            break;
        case 5: case 6:
            alert("Estas aprobado con un suficiente");
            break;     
        case 7: case 8:    
        alert("Estas aprobado con un notable");
            break;   
        case 9:  case 10:
            alert("Estas aprobado con un sobresaliente");
            break;
        default: 
           alert("El numero no es valido para una nota");           
    }
}

function imparesAl20(){
    var impares=1;
    var max=20;
    while (impares <=20) {
        
        if(impares%2!=0)    {
        console.log(impares);
        
        }
        impares++;
    }
}

function numeroImpar(){
    
    var cadena=" ";

    var impares=1;

    var max=20;

    while (impares <=20) {

        if(impares%2!=0)    {

            console.log(impares);

            cadena=cadena+" "+impares;    
        }
    
     impares++;

    }

    document.getElementById("p3").innerHTML = cadena;

}

function siguientePrimo() {
    var inputNumber = document.getElementById("num").value;
    if (isNaN(Number(num))) {
        alert("No me trolees!!");
        return;
    }
 
    while (!esPrimo(num)) {
        num++;
    }
    alert("Siguiente primo: " + num);
}
 
function esPrimo(num){
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}

function tablamulti(){
    for(var i=0;i<=10;i++){
        document.write("</br>");
        document.write("<span>Tabla del "+i);
        document.write("</br>");
        document.write("--------------");
        document.write("</br>");
        document.write("</span>"); 
        for (var j=0;j<=10;j++){
            var resultado=i*j;
            document.write(i+"x"+j+"="+resultado+"||");
            document.write("</br>");

        }
        
        
    }
}

function mostrarprimos(){

    for(var i=2;i<=23;i++){
        if (esPrimo(i)){
        document.write(i);
        document.write("||");
        }
    }
}
function mostrarprimosalreves(){

    for(var i=23;i>=2;i--){
        if (esPrimo(i)){
        document.write(i);
        document.write("||");
        }
    }
}




