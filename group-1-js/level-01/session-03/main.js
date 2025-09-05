//////Array

const arr = ["abdo", "hamza", "mohamed", "haya", "berry"];

console.log(arr[2]);

arr.push("hasan"); //add from last

console.log(arr);

arr.pop(); // revome from last

console.log(arr);

arr.unshift("hana"); //add from beging

console.log(arr);

arr.shift(); //remove from begin

console.log(arr);

console.log(arr.indexOf("abdo"));
console.log(arr.includes("abdo")); // true
console.log(arr.includes("abdoooo")); //fasle

//////object

function calcAge() {
  age = 2037 - birthYear;
  return age;
}

const obj = {
  firstName: "Jonas",
  lastName: "hasan",
  birthYear: 2003,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  calcAge: function () {
    // 'this' refers to the current object (obj)
    this.age = 2025 - this.birthYear;
    return this.age;
  },
};
console.log(obj.calcAge());
console.log(obj.age);
console.log(obj.firstName); //dot notation
console.log(obj["firstName"]); //bracket notation

console.log(obj.friends[0]);
