function displaynum(n1){
    var num = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = num + n1 ;
}

function calculate () {
    
    var result = document.getElementById("result").innerHTML;
    if(result){
        document.getElementById("result").innerHTML = eval(result)
    }
}