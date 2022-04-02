const extractData = async(url)=>{
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const appendData = (content,parent)=>{
    content.forEach((el)=>{
        let div = document.createElement("div");
        div.onclick = ()=>{
            localStorage.setItem("details",JSON.stringify(el));
            window.location.href="/search.html";
        }
        let image = document.createElement("img");
        image.src = el.urls.regular;
        div.append(image);
        parent.append(div);
    })
}

const appendDetails = (data,parent)=>{
    parent.innerHTML = "";
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = data.urls.regular;
    div.append(image);
    parent.append(div);
}
export { extractData, appendData, appendDetails };