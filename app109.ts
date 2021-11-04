var a: number = 2;
var b: number = 3; //explicitly 
var result: any; //implicitly

result = (a & b);
console.log(result);

result = (a | b);
console.log(result);

result = (a ^ b);
console.log(result);

result = (~b);
console.log(result);
