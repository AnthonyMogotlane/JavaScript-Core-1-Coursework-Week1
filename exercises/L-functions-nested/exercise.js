var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// To uppercase function
const uppercase = firstName => firstName.toUpperCase();
// Message function
const message = firstName => {
    return "HELLO " + uppercase(firstName);
}
console.log(message(mentor1));
console.log(message(mentor2));
console.log(message(mentor3));
console.log(message(mentor4));
console.log(message(mentor5));
