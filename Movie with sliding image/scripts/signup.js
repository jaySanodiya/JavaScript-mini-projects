document.querySelector("form").addEventListener("submit",AddData);
var arr= JSON.parse(localStorage.getItem("Data"))||[];
function AddData(event){
    event.preventDefault();
    var name = document.querySelector(".name").value;
    var number = document.querySelector(".contact").value;
    var email = document.querySelector(".email").value;
    var pass = document.querySelector(".pass").value;
    if(name==""||number==""||email==""||pass==""){
        alert("Please fill everything");
    }
    else{
        var obj = {
            nme:name,
            num:number,
            mle:email,
            pss:pass
        };
        arr.push(obj);
        localStorage.setItem("Data",JSON.stringify(arr));
        window.location.href="login.html";
    }
}

