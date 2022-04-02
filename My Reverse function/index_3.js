
var a2 = new myArray(1,2,3,4,5);
function myArray(){
    Object.defineProperty(this, "length",{
        writable:true,
        enumerable:false,
    });
    for(var i=0; i<arguments.length;i++){
        this[i] = arguments[i];
        this.length=arguments.length;
    }
}

myArray.prototype.ढकेलना = function(n){
    let index = this.length;
    this[index]=n;
    this.length++;
}
a2.ढकेलना("jay");
console.log("a2:",Object.values(a2));

function mySwap(arr,a,b){
    let temp = arr[a];
    arr[a]= arr[b];
    arr[b]= temp;
}
myArray.prototype.Palatna = function(){

    let index = this.length;
    let end = index/2;
    for(var i=0; i<end;i++){
        mySwap(this,i,index-i-1);
    }
    return Object.values(this);
}

myArray.prototype.wapasKariye = function(){
    return this[0];
}

console.log(a2.wapasKariye());
var palti = a2.Palatna();
console.log(palti);

