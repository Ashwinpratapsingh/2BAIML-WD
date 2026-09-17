let Fname="Ashwin";
let lname="Singh";

console.log("My first Name is "+ Fname);
console.log("My Last Name is "+ lname);
console.log(`My first Name is ${Fname}`);
console.log(`My Name is : ${Fname}${lname}`);

function fulname(Fname,lname){
    return `$(Fname) $(lname)`
}

function physics(marks){
    return `${marks}`;
}

physics = (marks) =>`${marks}`;