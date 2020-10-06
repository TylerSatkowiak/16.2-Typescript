var K = {
    name: 'Kilimanjaro',
    height: 19341
};
var E = {
    name: 'Everest',
    height: 29029
};
var D = {
    name: 'Denali',
    height: 20310
};
var mountains = [
    K, E, D
];
function getMountains(mountains) {
    var num = 0;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var m = mountains_1[_i];
        if (m.height > num) {
            num = m.height;
        }
        else {
            console.log('The height of ' + m.name + ' is not larger than ' + num + 'ft.');
        }
    }
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height === num) {
            return 'The tallest mountain is ' + mountains[i].name;
        }
    }
}
//PRODUCTS #2
var motor = {
    name: 'Motor',
    price: 10
};
var sensor = {
    name: 'Sensor',
    price: 12.50
};
var led = {
    name: 'LED',
    price: 1
};
var products = [
    motor, sensor, led
];
function calcAverageProductPrice(products) {
    var num = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var p = products_1[_i];
        num = num + p.price;
    }
    num = num / products.length;
    console.log('The average of all prices is ' + num);
}
var MOTOR = {
    product: {
        name: "Motor",
        price: 10
    },
    quantity: 10
};
var SENSOR = {
    product: {
        name: "Sensor",
        price: 12.50
    },
    quantity: 4
};
var LED = {
    product: {
        name: "led",
        price: 1
    },
    quantity: 20
};
var inventory = [
    MOTOR, SENSOR, LED
];
function calcInventoryValue(inventory) {
    var total = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var num = inventory_1[_i];
        total += (num.product.price * num.quantity);
    }
    ;
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
//# sourceMappingURL=app.js.map