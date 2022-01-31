alert('hola mundo');

function random(){
    let a = Math.floor(Math.random()*10);
    document.getElementById("p1").innerHTML = a;
}

    var primero =1;
    var segundo = ++primero;
function incremento(){
    
    document.getElementById("incremento").innerHTML = segundo; 
}