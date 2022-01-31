function validar(){

var telefono=document.getElementById("telf").value;
if(telefono<0||telefono>9){
    alert("No es un numero de telefono valido");
}
}

function navegador(){
    var miNavegador =window.navigator.userAgent;
    if (miNavegador.indexOf("Chrome")>-1){
        alert("Has utilizado Chrome");
    }else if(miNavegador.indexOf("Firefox")>-1){
        alert("Has utilizado mozilla")
    }
    
    console.log(miNavegador);

}

function concatenar() 
{

var mensaje="";
do{
var opcion = prompt("Introduzca su frase: ", );
 var confirmacion=confirm("Quiere introducir mas frases");

if(confirmacion){
mensaje=mensaje+ "-"+opcion;
}else{
    mensaje=mensaje+opcion;
}
            
}while(confirmacion==true);
alert(mensaje);
}

var texto="";
function lista (){
    texto = document.getElementById('texto').value;
    document.getElementById("listita").innerHTML += "<li>"+texto+"</li>";
}
var segundovalor;
var primervalor;
function calculadora(){
    primervalor=document.getElementById("texto1").value;
    segundovalor=document.getElementById("texto2").value;
    suma(primervalor,segundovalor);
}

function suma(segundovalor, primervalor){
    
   var valorInt1= parseInt(primervalor);
   var valorInt2= parseInt(segundovalor);

   var resultado= valorInt1+valorInt2;
    document.getElementById("resultado").innerHTML +=resultado;
    
}