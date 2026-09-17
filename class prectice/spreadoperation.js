function sum(...values){
    let sum=0;
    for(let i in values){
        sum = sum +values[i];
    }
    console.log(sum);
}

let arr=[10,20,30,40,50];
// sum(...arr);

var a1 = [10,20,30];
var a2 = [40,50];
var a3 = a1.concat(a2)

console.log(a3);

var a3 = [a1,...a2]
console.log(a3);