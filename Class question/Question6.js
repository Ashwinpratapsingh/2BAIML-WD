class Person {
    static count = 0;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;

        Person.count++;
    }

    displayDetails() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }

    static displayTotalPersons() {
        console.log("Total Persons:", Person.count);
    }
}


class Doctor extends Person {
    constructor(id, name, age, specialization, consultationFee) {
        super(id, name, age);

        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }

    displayDetails() {
        console.log("----- Doctor -----");
        super.displayDetails();
        console.log("Specialization:", this.specialization);
        console.log("Consultation Fee: Rs.", this.consultationFee);
    }
}


class Patient extends Person {
    constructor(id, name, age, disease, roomNo) {
        super(id, name, age);

        this.disease = disease;
        this.roomNo = roomNo;
    }

    // Method overriding
    displayDetails() {
        console.log("----- Patient -----");
        super.displayDetails();
        console.log("Disease:", this.disease);
        console.log("Room No:", this.roomNo);
    }
}


let doctor1 = new Doctor(
    101,
    "Dr. Rahul",
    45,
    "Cardiologist",
    1000
);

let doctor2 = new Doctor(
    102,
    "Dr. Priya",
    38,
    "Dermatologist",
    800
);


// Creating two patients
let patient1 = new Patient(
    201,
    "Aman",
    25,
    "Fever",
    101
);

let patient2 = new Patient(
    202,
    "Neha",
    30,
    "Diabetes",
    102
);


doctor1.displayDetails();
console.log();

doctor2.displayDetails();
console.log();

patient1.displayDetails();
console.log();

patient2.displayDetails();
console.log();

Person.displayTotalPersons();