/* 
1.b)flase
2.b)false
3.a)true
4.a)0 C)NaN d)undefined
5. a)true
6. a)true
*/

//////////////////////////////////////////////////////////////
/* 
1.b)"52"
2.B) 3
3.b)42
4.b)true
5.B) false

*/
///////////////////////////////////////////////////////////////

class Vechile {
    constructor(type) {

        this.type = type;
    }
}

Vechile.prototype.describe = function() {
    return `brand: ${this.brand}, Type: ${this.type}, batteryRange: ${this.batteryRange}`;
}

class Car extends Vechile {
    constructor(type,brand) {
        super( type,brand);
        this.brand = brand;
    }
}

Car.prototype.honk = function() {
    return "Beep beep";
}


class ElectricCar extends Car {
    constructor(type, brand,batteryRange) {
        super(type,brand);
        this.batteryRange = batteryRange;
    }
}
ElectricCar.prototype.charge = function() {
    return "Battery charging";
}

Vechile.prototype.maxSpeed = 200;

let car = new ElectricCar("Model S","Tesla",  300);
console.log(car.describe());
console.log(car.honk());
console.log(car.charge());
console.log(car.maxSpeed);
console.log(car.__proto__); 
console.log(car.__proto__.__proto__); 
console.log(car.__proto__.__proto__.__proto__); 
console.log(car.__proto__.__proto__.__proto__.__proto__); 
console.log(car.__proto__.__proto__.__proto__.__proto__.__proto__); 
