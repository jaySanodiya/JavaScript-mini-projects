import navbar from "./components/navbar.js";

var paste = document.querySelector("#navbar");
paste.innerHTML=navbar();

// http://www.themealdb.com/api/json/v1/1/random.php
//http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
const getElem = async()=>{
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c");
        let data = await res.json();
        createMealList(data.meals);
    } catch (err) {
        console.log(err);
    }
}
getElem();


const  createMealList = (data)=> {
    data.map((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class","box1");
        let img = document.createElement("img");
        img.src=el.strMealThumb;
        let p = document.createElement("p");
        p.innerHTML=el.strMeal;
        div.append(img,p);
        document.querySelector("#container").append(div);
    })
}

