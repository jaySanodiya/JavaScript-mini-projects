
//  api  AIzaSyBu2jERf8lxbA51RG0WvxfJQ9Mde5UQT8w
// parameters maxResults=2&part=snippet&q=netflix&type=video regionCode 91

//  https://www.youtube.com/embed/${videoId}?modestbranding=1
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${key}&maxResults=20

const getElem = async () =>{
    try{
        let res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&regionCode=IN&key=AIzaSyDrvVQ2oxeMacmlT8RGJB1658deBiBxnpc&maxResults=20`);

        // let res = await fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=50&regionCode=IN&chart=mostPopular&part=snippet&type=video&key=AIzaSyDrvVQ2oxeMacmlT8RGJB1658deBiBxnpc`);
        let data = await res.json();
        displayData(data.items);
    }
    catch(err){
        console.log(err);
    }
}
getElem();

const displayData = (videoArray) => {
    videoArray.forEach((el)=>{
        const {
            snippet:{title},
            snippet:{channelTitle:channel},
            snippet:{thumbnails:{high:{url:poster}}},
            snippet:{publishTime:date},
        } = el;
        var div = document.createElement("div");
        div.setAttribute("class","videoFrame")
        var frame = document.createElement("img");
        frame.src = poster;
        frame.onclick =function button(){
            localStorage.setItem("videoId",JSON.stringify(el));
            window.location.href = "VideoPlayer.html"
        };
        frame.style.width="270px";
        var div2 = document.createElement("div");
        div2.setAttribute("class","belowVideo")
        var logo = document.createElement("img");
        logo.src="./icons./_MG_0095.jpg";
        logo.style.height="40px";
        logo.style.borderRadius="20px";
        var name = document.createElement("p");
        name.innerHTML=title;
        name.onclick =function button(){
            localStorage.setItem("videoId",JSON.stringify(el));
            window.location.href = "VideoPlayer.html"
        };
        var channelName = document.createElement("h4");
        channelName.innerHTML=channel;
        channelName.onclick =function button(){
            localStorage.setItem("videoId",JSON.stringify(el));
            window.location.href = "VideoPlayer.html"
        };
        var time = document.createElement("h4");
        time.innerHTML=checkTime(date);
        var div3 = document.createElement("div");
        div3.setAttribute("class","buttons");
        var btn1 = document.createElement("button");
        btn1.innerHTML="WATCH LATER";
        var btn2 = document.createElement("button");
        btn2.innerHTML="ADD TO QUEUE";
        div3.append(btn1,btn2);
        div2.append(logo,name);
        div.append(frame,div2,channelName,time,div3);
        document.querySelector("#container").append(div);
    })
    
}


function checkTime(date){
    var year = date[0]+date[1]+date[2]+date[3];
    let month = date[5]+date[6];
    var curr_date = Date().split(" ");
    var current_year = curr_date[3];
    let year_diff = current_year-year;
    let curr_month = curr_date[1];
    if(year_diff){
        return year_diff + " year ago";
    }


    if(curr_month=="jan"){
        curr_month=01;
    }
    else if(curr_month=="feb"){
        curr_month=02;
    }
    else if(curr_month=="mar"){
        curr_month=03;
    }
    else if(curr_month=="apr"){
        curr_month=04;
    }
    else if(curr_month=="may"){
        curr_month=05;
    }
    else if(curr_month=="jun"){
        curr_month=06;
    }
    else if(curr_month=="jul"){
        curr_month=07;
    }
    else if(curr_month=="aug"){
        curr_month=08;
    }
    else if(curr_month=="sep"){
        curr_month=09;
    }
    else if(curr_month=="oct"){
        curr_month=10;
    }
    else if(curr_month=="nov"){
        curr_month=11;
    }
    else{
        curr_month=12;
    }

    return Math.abs(curr_month-month) + " month ago";
}


var x;
const debouncing = (create_search,delay)=> {
    if(x){
        clearTimeout(x);
    }
    x = setTimeout(function(){
        create_search();
    },delay);
}

const create_search = async () => {
    var input = document.querySelector("#startInput").value ;
    try{
        let res = await fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=8&q=${input}&part=snippet&type=video&key=AIzaSyBCPm17_3SuGFjO5Mps5v8qDmzt5d8FJhM`);
        let data = await res.json();
        create_search_page(data.items);
    }
    catch(err){
        console.log(err);
    }
}
var arr = [];
const create_search_page = (data)=> {
    document.querySelector(".list").innerHTML="";
    data.forEach((el)=>{
        const {
            snippet:{title},
        } = el;
        var text = document.createElement("li");
        text.innerHTML=title;
        text.onclick=()=>{
            x.innerHTML="";
            x.style.opacity="0";
            arr.push(title);
            localStorage.setItem("title",JSON.stringify(arr));
            document.querySelector("#horizontal_menu").innerHTML="";
            window.location.href = "searchResults.html"
        };
        var x = document.querySelector(".list")
        x.append(text);
        x.style.opacity="1";

    })
}

const hitEnter = ()=>{
    var input = document.querySelector("#startInput").value;
    var x = document.querySelector(".list");
    x.innerHTML="";
    arr.push(input);
    x.style.opacity="0";
    localStorage.setItem("title",JSON.stringify(arr));
    window.location.href = "searchResults.html"
}

function button(){
   
}