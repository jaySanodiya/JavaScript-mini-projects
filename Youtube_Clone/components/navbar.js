function navbar() {
    return `
    <div id="firstDiv">
        <img class="img1" src="./icons/menu.png" alt="">
        <img class="img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjdeISHHLUHb2i_CDil1enAMXLjnwzMz3pQ&usqp=CAU" alt="">
    </div>
    <div id="searchbar">
        <div class="input_box">
            <input type="text" oninput="debouncing(create_search,500)" placeholder="Search" id="startInput">
            <div class="list">
            
            </div>
        </div>
        <button id="magnifying"><img src="./icons/search.png" alt=""></button>
        <button id="microphone"><i class="fas fa-microphone"></i></button>
    </div>
    <div id="lastDiv">
        <img src="./icons/upload.png" alt="">
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
        <img src="./icons/notification.png" alt="">
        <img id="profile" src="./icons/_MG_0096.jpg" alt="">
        
    </div>`
};

export default navbar;
