// ea0c5b211bf7a668315341c846e45497

async function letsGo(){
    let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8`;
    try{
        let res = await fetch(url);
        let data = await res.json();
        createPage(data.results);
    }
    catch(err){
        console.log(err);
    }

}
letsGo();
const createPage = (data)=> {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    data.map((el)=>{
        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        div2.setAttribute("class","release")
        var p = document.createElement("p");
        p.innerHTML=el.title;
        var img = document.createElement("img");
        img.src=el.poster_path? IMG_URL + el.poster_path: "http://via.placeholder.com/1080x1580";
        var h4 = document.createElement("h4");
        h4.innerHTML = el.overview;
        var h3 = document.createElement("h3");
        h3.innerHTML = el.release_date;
        var h31 = document.createElement("h5");
        h31.innerHTML="Rating "+ el.vote_average ;
        div2.append(h3,h31);
        div1.append(img,p,div2,h4);
        document.querySelector("#container").append(div1);
    })
}

