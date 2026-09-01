let text="Something";
console.log(text);

let a=40;
let b=30;
if(a>b){
    console.log("A is grater , A is =",a)
}else console.log("B is grater , B is =",b)

function great(fname,lname){
    console.log("Hello",fname,lname)
}
great("Ashwin","Pratap")

function add(x,y) {return x+y}

let result = add(10,20);
console.log("Sum = ",result)

function fullname(faname="Ashwin",Lname="Pratap Singh"){
    return faname+" "+Lname;
}
fullname()
fullname();
function total(s1,s2,s3){
    return s1+s2+s3;
}
function add(marks){
    return (marks/300)*100;
}
let totalMarks = total(80, 90, 85);  
console.log(totalMarks);
let percentage = add(totalMarks);
console.log(percentage);

let student = {
    [1,2,3,4,5]
}