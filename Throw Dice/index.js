function dice(){
    var a = document.querySelector("h1");
    var b = Math.floor(Math.random()*7);
    a.innerHTML = b;
    if(b==6){
        a.style.color="green";
    }
    else if (b==0){
        a.style.color="blue";
    }
    else {
        a.style.color="red";
    }
    
 }