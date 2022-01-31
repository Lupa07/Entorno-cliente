function anios(){

    var anios=prompt("Introduce el año");
    if((anios%400 ==0)|| (anios%4==0 && anios/100!=0)){
         alert("Es bisisesto");
        }else{
            alert("Este anio no es bisiesto");
        }
}