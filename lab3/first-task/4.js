//1
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
function camelize(str) {
    return str
      .split('-')
      .map(
     
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  }
//2
function filterRange(arr, a, b) {
    
    return arr.filter(item => (a <= item && item <= b));
  }
  
  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  
  alert( filtered );
  
  alert( arr ); 
//3
let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

alert( arr1 );
//4
function copySorted(arr2) {
    return arr2.slice().sort();
  }
  
  let arr2 = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr2);
  
  alert( sorted );
  alert( arr2 );
  //5
  let powerCalc = new Calculator;
  
  alert( calc.calculate("3 + 7"));
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  
  let result = powerCalc.calculate("2 ** 3");
  alert( result );
//6
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );
//7
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1 ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id );
alert( usersMapped[0].fullName ); 
//8
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john2 = { name: "John", age: 25 };
  let pete2 = { name: "Pete", age: 30 };
  let mary2 = { name: "Mary", age: 28 };
  
  let arr3 = [ pete, john, mary ];
  
  sortByAge(arr3);
  
  
  alert(arr3[0].name); 
  alert(arr3[1].name); 
  alert(arr3[2].name);
//9
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  let arr5 = [1, 2, 3];
  shuffle(arr5);
  alert(arr5);
//10
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john3 = { name: "John", age: 25 };
  let pete3 = { name: "Pete", age: 30 };
  let mary3 = { name: "Mary", age: 29 };
  
  let arr6 = [ john3, pete3, mary3 ];
  
  alert( getAverageAge(arr6) );
//11
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) );
//12
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }