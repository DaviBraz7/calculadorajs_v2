function displaynum(n1){
    var num = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = num + n1 ;

}


function funcion(p1) {
    calculate();
    var num = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = num + p1      
}

function back(){
    var result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring (0, result.length -1);
}


function calculate () {
    
    var result = document.getElementById("result").innerHTML;
    if(result){
        document.getElementById("result").innerHTML = eval(result)
    }
}