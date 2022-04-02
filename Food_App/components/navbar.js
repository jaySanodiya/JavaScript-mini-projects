const navbar= ()=>{
    return ` 
    <div id="firstDiv">
        <img class="img2" src="./icons/Food_Store_logo.png" alt="">
    </div>
    <div id="searchbar">
        <div class="input_box">
            <input id="startInput" type="text" placeholder="Search Your Dish...">
            <div class="list">
            </div>
        </div>
        <button id="magnifying"><img src="./icons/search.png" alt=""></button>
        <button id="microphone"><i class="fas fa-microphone"></i></button>
    </div>
    
    <div id="lastDiv">
    <a href="index.html">Home</a>
        
        <a href="latest.html">Latest</a>
        <a href="">Sign In</a>
        <div id="apps">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <img id="profile" src="./icons/_MG_0096.jpg" alt="">
        
    </div>`;
};

export default navbar;
