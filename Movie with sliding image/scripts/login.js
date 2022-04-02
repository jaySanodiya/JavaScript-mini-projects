

document.querySelector("form").addEventListener("submit",AddData);
var arr= JSON.parse(localStorage.getItem("Data"));
function AddData(event){
    event.preventDefault();
    var email = document.querySelector(".email").value;
    var pass = document.querySelector(".pass").value;
    var jay = true;
    arr.map(function(elem){
        if(elem.mle==email && elem.pss==pass){
            jay = false;
            window.location.href='index.html';
        }
    });
    if(jay){
        alert("invalid Credentials");
    }
}
