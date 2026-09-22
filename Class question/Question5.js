class Vehicle {
    constructor(vehicleNo, driverName, distance) {
        this.vehicleNo = vehicleNo;
        this.driverName = driverName;
        this.distance = distance;
    }

    calculateFare() {
        return 0;
    }

    static displayPlatform() {
        console.log("Booking Platform: QuickRide");
    }
}


class Car extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        return this.distance * 15;
    }
}

class Bike extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }


    calculateFare() {
        return this.distance * 8;
    }
}


let car1 = new Car("C101", "Rahul", 20);
let bike1 = new Bike("B202", "Aman", 25);


console.log("Car Fare: Rs.", car1.calculateFare());
console.log("Bike Fare: Rs.", bike1.calculateFare());


Vehicle.displayPlatform();