function numeroAleatorio(){

    document.getElementById("p1").innerHTML=Math.random(10)*10;
  // inner html es una propiedad de html del p en este caso. cualquier cosa entre dos etiquetas
 }
 
 //ctrl f5 borra cache
 
 var primero=1;
 var segundo=++primero;
 
 var primero=1;
 var segundo=primero++;
 
 function vars(){
     document.getElementById("p2").innerHTML=primero;
     document.getElementById("p3").innerHTML=segundo;
 }