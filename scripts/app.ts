interface Mountain {
    name: String,
    height: Number
}

let K: Mountain = {
    name: 'Kilimanjaro',
    height: 19341
}
let E: Mountain = {
    name: 'Everest',
    height: 29029
}
let D: Mountain = {
    name: 'Denali',
    height: 20310
}
let mountains: Mountain[] = [
    K, E, D
];

function getMountains(mountains) {
    
    let num = 0;
    
    for (let m of mountains) {
        if (m.height > num) {
            num = m.height;
        }
        else {
            console.log('The height of '+ m.name + ' is not larger than ' + num + 'ft.');
        }
    }

    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height === num) {
            return 'The tallest mountain is ' + mountains[i].name;
        }
    }
    
}

//PRODUCTS #2
let motor: Product = {
    name: 'Motor',
    price: 10
}

let sensor: Product = {
    name: 'Sensor',
    price: 12.50
}

let led: Product = {
    name: 'LED',
    price: 1
}

let products: Product[] = [
    motor, sensor, led
];

interface Product {
    name: String,
    price: Number
}

function calcAverageProductPrice(products) {
    let num = 0;
    for (let p of products) {
        num = num + p.price;
    }
    num = num / products.length;
    console.log('The average of all prices is ' + num);
}


//#3 INVENTORY

interface InventoryItem {
    product: Product,
    quantity: Number
}


let MOTOR: InventoryItem = {
    product: {
        name: "Motor",
        price: 10
    },
    quantity: 10
}

let SENSOR: InventoryItem = {
    product: {
        name: "Sensor",
        price: 12.50
    },
    quantity: 4
}

let LED: InventoryItem = {
    product: {
        name: "led",
        price: 1
    },
    quantity: 20
}

let inventory: InventoryItem[] = [
   MOTOR, SENSOR, LED
];


function calcInventoryValue(inventory) {
    let total = 0;
    for (let num of inventory) {
        total += (num.product.price*num.quantity)
    };
    return 'Grand total: ' + total;
}


/*
interface Car {
    model: String,
    color: String,
    drive(): void
}

function trip(car: Car) {
    console.log("Trip function");
    car.drive();
    console.log(car.model);
    console.log("You've arrived!");
}

function testTrip() {
    let schwin = {
        model: 'Abc',
        color: 'Black',
        wheelsize: 30
    }

    let honda: Car = {
        model: 'Civic',
        color: 'Red',
        drive: function () {
            console.log('Honda is driving.');
        }
    }

    let chevy: Car = {
        model: 'Trax',
        color: 'Blue',
        drive: function () {
            console.log('Chevy is driving.');
        }
    };

    trip(chevy);
    trip(honda);

    let carshop: Car[] = [
        honda,
        {
            model: 'Toyota',
            color: 'Red',
            drive: function () {
                console.log('Toyota is driving');
            }
        }


    ];

    carshop.push(chevy);
    //carshop.push({ model: 'Toyota', color: 'Red', drive: function () { } });

    for (let car of carshop) {
        console.log(car.model);
        
    }

}
*/