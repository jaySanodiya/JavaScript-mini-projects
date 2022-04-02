import navbar from "./components/navbar.js";

var paste = document.querySelector("#navbar");
paste.innerHTML=navbar();


const startPage = async()=>{
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let fMeal = await res.json();
        appendFMeal(fMeal.meals[0]);
    } catch (err) {
        console.log(err);
    }
}

startPage();

const appendFMeal =(Meal)=>{
    var div1 = document.createElement("div");
    div1.setAttribute("class","left");
    var thumb = document.createElement("img");
    thumb.src = Meal.strMealThumb;
    div1.append(thumb);
    var div2 = document.createElement("div");
    div2.setAttribute("class","right");
    var div3 = document.createElement("div");
    div3.setAttribute("class","ingredient")
    var head1 = document.createElement("h1");
    head1.innerHTML = "Receipe of the Day";
    var head2 = document.createElement("h2");
    head2.innerHTML = Meal.strMeal;
    var head3 = document.createElement("p");
    head3.append(Ingredientof(Meal));
    var head4 = document.createElement("p");
    head4.innerHTML ="Instructions  -- "+ Meal.strInstructions;
    var head5 = document.createElement("p");
    head5.innerHTML="Youtube link : " +Meal.strYoutube;
    div3.append(head2,head3,head4,head5);
    div2.append(head1,div3);
    document.querySelector("#container").append(div1,div2);
    
    
}


const Ingredientof = (Meal) =>{
    let ul = document.createElement("ul");
    let p = document.createElement("h3");
    p.innerHTML="Ingredients"
    ul.append(p);
    var i = -8;
    var j = 1;
    let ing;
    let mea ;

    // for(let key in Meal){
    //     if(key == `strIngredient${i}`&&Meal[key]!==""){
    //         ing = Meal[key];
    //     }
    //         i++;
    //     if(key == `strMeasure${j}`&&Meal[key]!==""){
    //         mea = Meal[key];
    //         j++;
    //     }
    //     let li = document.createElement("li");
    //     li.innerHTML= ing+"-"+mea +", ";
    //     ul.append(li);
    // }
    if(Meal.strIngredient1){
        
    }
    if(Meal.strIngredient2){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient2+"-"+Meal.strMeasure2 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient3){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient3+"-"+Meal.strMeasure3 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient4){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient1+"-"+Meal.strMeasure1 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient5){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient5+"-"+Meal.strMeasure5 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient6){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient6+"-"+Meal.strMeasure6 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient7){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient7+"-"+Meal.strMeasure7 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient8){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient8+"-"+Meal.strMeasure8 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient9){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient9+"-"+Meal.strMeasure9 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient10){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient10+"-"+Meal.strMeasure10 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient11){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient11+"-"+Meal.strMeasure11 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient12){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient12+"-"+Meal.strMeasure12 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient13){
        let li = document.createElement("li");
        li.innerHTML= Meal.strIngredient13+"-"+Meal.strMeasure13 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient14){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient14+"-"+Meal.strMeasure14 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient15){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient15+"-"+Meal.strMeasure15 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient16){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient16+"-"+Meal.strMeasure16 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient17){
        let li = document.createElement("li");
        li.innerHTML= Meal.strIngredient17+"-"+Meal.strMeasure17 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient18){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient18+"-"+Meal.strMeasure18 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient19){
        let li = document.createElement("li");
        li.innerHTML= Meal.strIngredient19+"-"+Meal.strMeasure19 +", ";
        ul.append(li);
    }
    if(Meal.strIngredient20){
        let li = document.createElement("li");
        li.innerHTML=Meal.strIngredient20+"-"+Meal.strMeasure20 +", ";
        ul.append(li);
    }
    return ul;
}




let input = document.getElementById("startInput");
input.addEventListener("keypress",debouncing);

async function searchMovie(){
    try{
    let name = input.value ;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    let res = await fetch(url);
    let data = await res.json();
    return data.meals;
    }
    catch(err){
        console.log(err);
    }
}


async function main(){
    var data = await searchMovie();
    if(data ===null){
        return ;
    }
    appendData(data);
    
}

function appendData(meal){
    
    document.querySelector(".list").innerHTML=null;
    meal.forEach((el)=>{
        var li = document.createElement("li");
        li.innerHTML=el.strMeal;
        li.onclick=()=>{
            input.value ="";
            document.querySelector(".list").innerHTML=null;
            ShowMyDish(el);
        }
        document.querySelector(".list").append(li);
    })
    
}


var timerId;
function debouncing(){
    if(timerId){
        clearTimeout(timerId);
    }
    timerId = setTimeout(function(){
            main();
    
    },1000);
    
}



const ShowMyDish = (Meal)=>{
    document.querySelector("#container").innerHTML="";
    var div1 = document.createElement("div");
    div1.setAttribute("class","left");
    var thumb = document.createElement("img");
    thumb.src = Meal.strMealThumb;
    div1.append(thumb);

    var div2 = document.createElement("div");
    div2.setAttribute("class","right");
    var div3 = document.createElement("div");
    div3.setAttribute("class","ingredient")
    var head2 = document.createElement("h2");
    head2.innerHTML = Meal.strMeal;
    var head3 = document.createElement("p");
    head3.append(Ingredientof(Meal));
    var head4 = document.createElement("p");
    head4.innerHTML ="Instructions  -- "+ Meal.strInstructions;
    var head5 = document.createElement("p");
    head5.innerHTML="Youtube link : " +Meal.strYoutube;
    div3.append(head2,head3,head4,head5);
    div2.append(div3);
    document.querySelector("#container").append(div1,div2);
    
}

let btn = document.getElementById("magnifying");
btn.addEventListener("click",searchData);

 async function searchData(){
    let input1 = document.getElementById("startInput").value;
    document.querySelector(".list").innerHTML=null;
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input1}`);
        let data = await res.json();
        createMealList(data.meals);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

const  createMealList = (data)=> {
    document.querySelector("#bucket").innerHTML=null;
    data.map((el)=>{
        document.querySelector("#container").innerHTML = null;
        let div = document.createElement("div");
        div.setAttribute("class","box1");
        let img = document.createElement("img");
        img.src=el.strMealThumb;
        let p = document.createElement("p");
        p.innerHTML=el.strMeal;
        div.append(img,p);
        document.querySelector("#bucket").append(div);
    })
}


