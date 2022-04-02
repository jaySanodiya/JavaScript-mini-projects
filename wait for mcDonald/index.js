
var data = 
    {
        ATB:["https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589467260/Item/65.png","McAloo Tikki Burger"],
    
        VB:["https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466377/Item/66.png","McVeggie Burger"],
    
        SCB:["https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1642087175/Item/47.png","McSpicy Chicken Burger"],
   
        CB:["https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466276/Item/40.png","McChicken Burger"],
   
        BSCW:["https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466424/Item/48.png","Big Spicy Chicken Wrap"],
    }

function Order(){
    var id = Math.round(Math.random()*100);
    var x = document.querySelector("#container > select").value;
    let promise = new Promise(function(resolve,rejected){
        setTimeout(function(){
            document.querySelector("#img > img").src = "";
            document.querySelector("#name > h2").innerHTML="";
            document.querySelector("#name > h3").innerHTML="";
            document.querySelector("#name > p").innerHTML="";
             resolve()
        },5000)
    })
    promise.then(function(res){
    document.querySelector("#img > img").src = data[x][0];
    document.querySelector("#name > p").innerHTML="Order No." + id;
    document.querySelector("#name > h2").append(`Your ${data[x][1]} is ready`);
    document.querySelector("#name > h3").append("Come back again")
})
promise 
}
