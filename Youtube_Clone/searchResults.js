
var input = JSON.parse(localStorage.getItem("title"));

var title = input[0];

const getElem = async () =>{
    try{
        let res = await fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=20&q=${title}&part=snippet&type=video&key=AIzaSyDrvVQ2oxeMacmlT8RGJB1658deBiBxnpc`);
        let data = await res.json();
        console.log(data.items[0]);
        displayData(data.items);
    }
    catch(err){
        console.log(err);
    }
}
getElem();
var video_arr= [];
const displayData = (data)=>{
    data.forEach((el)=>{
        const {
            snippet:{title},
            snippet:{channelTitle:channel},
            snippet:{publishTime:date},
            snippet:{thumbnails:{high:{url:poster}}},
            snippet:{description:about},
        } = el;
        var div = document.createElement("div");
        div.setAttribute("class","box1");
        var frame = document.createElement("img");
        frame.src = poster;
        frame.onclick =function button(){
            localStorage.setItem("videoId",JSON.stringify(el));
            window.location.href = "VideoPlayer.html"
        };
        frame.style.width="300px";
        var div2 = document.createElement("div");
        div2.setAttribute("class","box2");
        var logo = document.createElement("img");
        logo.src=poster;
        var name = document.createElement("h2");
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
        div3.setAttribute("class","box3");
        var div4 = document.createElement("div");
        div4.setAttribute("class","box4");
        var description = document.createElement("p");
        description.innerText=about;
        description.onclick =function button(){
            localStorage.setItem("videoId",JSON.stringify(el));
            window.location.href = "VideoPlayer.html"
        };
        div4.append(logo,channelName);
        div3.append(name,time,div4,description);
        div2.append(frame);
        div.append(div2,div3);
        document.querySelector("#SRcontainer").append(div);
    });
    
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
