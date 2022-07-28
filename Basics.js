// var UserName="SANTHOSH REKANAR";
// var EmployeeId = "1224234";
// var FirstName = 'Raj';
// var SecondName = 'Shekar';
// var village = 'Chowdarpalle'

// console.log(`
// THIS IS ME ${UserName} and
// employeeId is ${EmployeeId}
// with FirstName ${FirstName}
// and SecondName ${SecondName}
// `);

// var sellingPrice= 80;
// var listingPrice = 799;

// var discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100;
// //console.log("Disconted percentage is: " + discountPercent);
// console.log(Math.round(discountPercent)+ "% off");

// var result = sellingPrice< listingPrice;
// console.log(result)

// var temperature = 29;
// if (temperature = 20) {
//     console.log('Hello tenperature is less today');
// }

// if (temperature > 30) {
//     console.log("It is modertare");
// }
// else{
//     console.log('Heelo temperature is higher');
// }

// var email = true;
// var facebook = false;
// var google = false;

// if (email || facebook || google) {
//     console.log("Log in success");
// }

//Javascript
//Prinitvie data types

var z = 10;
var x = "Hello";
var D = undefined;
var R = null;
var b = true;

console.log(typeof(b));

var authenticates=false;

authenticates ? console.log('I am a ternary operator') : console.log('Hi');

//Falsy values
// NULL
//undefined
// ''
// NaN
// 0
var user = 'null';
if (user) {
    console.log('falsy');
}

var user = "2";

//=== is for strict type checking
if ("2" === user) {
    console.log("Hi 2");
}

function sayHello(name) {
    console.log('Hello', name);
}

sayHello('gdfdgdf');

function namstery(){
    return 'Hello in India';
}

var greetings = namstery();
console.log(greetings);

var getUserRole = function(name,role){
    switch(role){
        case "admin":
            return 'hi am ADMIN'+name;
            break;
        case "subadmin":
            return 'hi suadmin';
            break;
    }
}

console.log(getUserRole("samy","admins"));
