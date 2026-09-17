class students{
    static totalstudent=0;
    constructor(name,roll,marks){
        this.name=name;
        this.roll=roll;
        this.marks=marks;
        students.totalstudent++;
    }
    display(){
        console.log("Name: ",this.name)
        console.log("Roll number: ",this.roll)
        console.log("Marks: ",this.marks)

        if(this.marks<40) console.log("Failed")
        else console.log("Passed")
    }
}

let s1=new students("Ashwin",101,45);
let s2=new students("Atharv",101,35);
let s3=new students("Shivendra",101,40);
s1.display()
s2.display()
s3.display()
console.log(students.totalstudent)