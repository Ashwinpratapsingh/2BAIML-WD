// class hello{
//     contructor(){
//         console.log("Hellow constructor")
//     }
// }
// let h=new hello()

// class hello{
//     contructor(name){
//         this.empname=name;
//         this.faclty
//         console.log("Hellow constructor")
//     }
// }
// let h=new hello()

// class Student{
//     constructor(roll, name, year){
//         this.rollNo = roll;
//         this.Name = name;
//         this.Year = year;
//         console.log(this.rollNo);
//         console.log(this.Name);
//         console.log(this.Year);
        
//     }
// }
// let s1 = new Student();
// let s2 = new Student(101, "vikas", "2nd");
// let s3 = new Student(102, "Ashwin", "2nd");

class student{
    static F="Ashwin"
    static L="Singh"
    static display(){
        console.log(this.F)
        console.log(this.L)
    }
}
student.display()