import navbar from "./components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();




// const getElem = async () =>{
//     try{
//         let res = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${video_Id}&part=snippet&type=video&key=AIzaSyDrvVQ2oxeMacmlT8RGJB1658deBiBxnpc`);
//         let data = await res.json();
//     }
//     catch(err){
//         console.log(err);
//     }
// }



const displayData = (el)=>{
        const {
            snippet:{title},
            snippet:{channelTitle:channel},
            snippet:{thumbnails:{high:{url:poster}}},
            snippet:{description:about},
            id:{videoId:Id},
        } = el;
        
        var div1 = document.createElement("div");
        div1.setAttribute("class","box1");
        var frame = document.createElement("iframe");
        frame.src = `https://www.youtube.com/embed/${Id}`;
        frame.setAttribute("allowfullscreen",true);
        frame.style.width="100%";
        frame.style.height="550px";
        frame.title = title;
        frame.frameborder ="0";
        var div2 = document.createElement("div");
        div2.setAttribute("class","box2");
        var logo = document.createElement("img");
        logo.src="./icons./_MG_0095.jpg";
        var name = document.createElement("h2");
        name.innerHTML=title;
        var channelName = document.createElement("p");
        channelName.innerHTML=channel;
        var subscriber = document.createElement("h4");
        subscriber.innerHTML=Math.round(Math.random()*10)+ "M subscribers";
        var div3 = document.createElement("div");
        div3.setAttribute("class","box3");
        var div4 = document.createElement("div");
        div4.setAttribute("class","box4");
        var div5 = document.createElement("div");
        div5.setAttribute("class","box5");
        var div6 = document.createElement("div");
        div6.setAttribute("class","box6");
        var description = document.createElement("p");
        description.innerText=about;
        var showMore = document.createElement("p");
        showMore.innerText="SHOW MORE";
        var btn = document.createElement("button");
        btn.innerHTML="SUBSCRIBE";
        btn.backgroundColor="red";

        div2.append(name);
        div4.append(channelName,subscriber)
        div5.append(logo,div4,btn);
        div6.append(description,showMore);
        div1.append(frame);
        document.querySelector("#player").append(div1,div2,div3,div5,div6);
   
    
}

let videoId = JSON.parse(localStorage.getItem("videoId")); 
displayData(videoId);






















/*{ <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/hoY2YxLGV98" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; 
    autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>} */
    