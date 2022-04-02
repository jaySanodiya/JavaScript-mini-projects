

async function ShuruKaro(){
    DayWeather();
    try {
    let x = document.querySelector("input").value;
    
    var res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=753801b5fb20773e182f85e07f0ed778&units=metric`)
    var data = await res.json();
    
    console.log(data);
    
    showWeather(data);
    } 
    catch (error) {
        console.log("error")
    }
}
function showWeather(d){
    document.querySelector("#left").innerHTML="";
    var d1 = document.createElement("div");
    d1.setAttribute("class","box2");
    d1.innerHTML=d.name+ ", "+ new Date() ;
    var p = document.createElement("p");
    p.innerHTML= d.main.temp + "°C";
    var p1 = document.createElement("h3");
    p1.innerHTML= d.weather[0].description;
    var p2 = document.createElement("h3");
    p2.innerHTML= `Min Temp : ${d.main.temp_min} °C`;
    var p3 = document.createElement("h3");
    p3.innerHTML= `Max Temp : ${d.main.temp_max} °C`;
    var p4 = document.createElement("h3");
    p4.innerHTML= `Wind Speed : ${d.wind.speed} m/s`;

    document.querySelector("#left").append(d1,p,p1,p2,p3,p4);
    document.querySelector("iframe").src = `https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    
}



async function DayWeather(){
    try{
        
        let x = document.querySelector("input").value;
        var res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?cnt=7&q=${x}&appid=753801b5fb20773e182f85e07f0ed778`)
        var data2 = await res2.json();
        show7DayWeather(data2.list)
        console.log(data2.list);
    }
    catch(err){
        console.log(err);
    }
}

function show7DayWeather(data){
    var i = 1;
    data.map(function(el){
        var c = el.weather[0].description;
        
        var d = document.createElement("div");
        var p1 = document.createElement("p");
        p1.innerHTML = dayObj[i][0];
        var img = document.createElement("img");
        img.src=dayObj[i][1];
        var p2 = document.createElement("p");
        p2.innerHTML="Max "+ el.main.temp_max;
        var p3 = document.createElement("p");
        p3.innerHTML ="Min "+ el.main.temp_min;
        d.append(p1,img,p2,p3);
        document.querySelector("#day7").append(d);
        i++;
    });
};

var dayObj = {
    1 : ["Today","https://ssl.gstatic.com/onebox/weather/48/sunny.png"],
    2 : ["Mon","https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"],
    3 : ["Tue","https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"],
    4 : ["Wed","https://ssl.gstatic.com/onebox/weather/48/sunny.png"],
    5 : ["Thu","https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"],
    6 : ["Fri","https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"],
    7 : ["Sat","https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"]
};


/*
"scattered clouds"
"clear sky"
"overcast clouds"

*/