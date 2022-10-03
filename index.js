// let fistName = "Obama";
// let number = 15;
// let isMerried = false;
// let undefined;

// console.log(fistName);
// console.log(number);
// console.log(isMerried);
// let name = "ibrahgim";
// let ege = 15;
// let person = {
//   name: "ibragim",
//   age: 15,
// }
// let person = {
//    name: "Zumrad",
//    age: 40,
//    isMerried: "true",
  
// }
// object
// let person = {
//   name:"zumrad",
//   age:15,
// }
// person.name = "dilshod";
// person.age = 45
// console.log(person);
// array
// let selectedColor = ["oq","qora"];
// selectedColor[2] = "yashil";

// console.log(selectedColor.length);

// function greet(lastName, firstName) {
//   console.log("Assalomu aleykum "+lastName+" "+firstName);
// }
// greet("Zumradhon","Suvilon");
  
// function square(number){
//   return number*number;
// }
//  console.log(square(5));
// let person = "klient"
// let result = person === "klient" ? "bonus 20%": "bonus 5%";
// console.log(result);
let date = new Date();
let hors = date.getHours();
let minut = date.getMinutes();
console.log("hours: ",hors, "minut ", minut);
let isOffisOpen = (hors >= 9 || minut >= 0);
let isOffissClosed = !isOffisOpen;

console.log("ofis ocjiq", isOffisOpen);
console.log("ofis yopoq", isOffissClosed);