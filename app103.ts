var firstName: string = "Mark"; //global variable

function a(){
    //var msg: string = "Welcome to Tyscript";  //local variable 
    //var name:string = "Mark";
    var x:number = 30;
    return function b(){
        var y:number = x + 50;
        return y;
    }
}
//console.log(a()());//OK
var c = a();
console.log(c());//OK
