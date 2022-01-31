function mayorEdad(){
    var edad=prompt("Introduce tu edad");

    if (edad>=18){
        alert("Ya puedes conducir");
    }else{
        alert("Como te vea conduciendo te machaco");
    }
}


function nota(){
    var nota=document.getElementById("nota").value;
    var suspenso="Estas suspenso, haber estudiao"
    var notaNum=parseInt(nota);
    switch(notaNum){
        case 0: case 1: case 2: case 3: case 4:
            document.getElementById("fraseNota").innerHTML="Has suspendido el examen";
        break;

        case 5: case 6:
            document.getElementById("fraseNota").innerHTML="Has aprobado raspadillo ehh";
        break;

        case 7: case 8:
            document.getElementById("fraseNota").innerHTML="No está mal, pero lo podias mejorar";
        break;
        case 9: case 10:
            document.getElementById("fraseNota").innerHTML="<h3>Nada que añadir, sigue asi</h3>"
    }
}
var concat="";
function concatenar(){
    

    do{
        var palabra=prompt("Introduce una palabra");
    var confirmacion=confirm("Quieres seguir introduciendo palabras?");
    if(confirmacion==true){

        concat=concat+palabra+"-";

    }else{
        concat=concat+palabra;
    }
    
}while(confirmacion==true);
alert(concat);
}


var suma=0;
function pedirNumeros(){

    do{
        var numIntroducido=prompt("Introduce un valor");
        var condirmacion=confirm("Quieres introducir otro valor?")
        if(condirmacion==true){
            numIntroducido=Number(numIntroducido);
            suma=suma+numIntroducido;
        }else if(condirmacion==false){
            alert("El resultado de la suma es: ")
        }else{
            alert("Es no es un numero");
        }

    }while(condirmacion ==true);

    alert(suma);
}

