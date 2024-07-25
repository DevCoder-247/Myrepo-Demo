//Q.1
// const numbers = [1,2,3,4,5];
// const newArr = numbers.map((num) => {
//     return num*num;
// })
// console.log(newArr);


//Q2
// const score = 100;
// function grader(score) {
//     return (score >= 90) ? "Grade A" :
//     (score >= 80) ? "Grade B" :
//     (score >= 60) ? "Grade C" :
//     (score >= 40) ? "Grade D" :
//     "Grade F - Try Again";
// }
// console.log(grader(score));

//Q3
//  let Car = {company_name: "Car", model: "GTR", year:2019};
//  console.log(Car);
//  function changeCarYear (carObj , newYear) {
//     carObj.year = newYear;
//  }
//  changeCarYear(Car, 2022);
//  console.log(Car);

//  let c_name = Car.company_name;
//  let model = Car.model;
//  console.log("Company name: "+c_name , "\n"+"Model name: "+model);

//Q4
// function Checkprime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function filterprime(arr) {
//     return arr.filter(Checkprime);
// }

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
// let primenum = filterprime(num);
// console.log(primenum);

//Q5
//1>> MAP FUNCTION
//Use cases 1.Transforming data
// let Strings = ["hello", "Upskillmafias"];
// let upperString = Strings.map((str) => str.toUpperCase());
// console.log(upperString);
//Use cases 2.Executing specific properties
// let users = [{name:"kunal", age: 23}, {name:"Vijay", age: 34}, {name:"Hardika", age: 17}];
// let names = users.map(users => users.name);
// console.log(names);
//Use cases 2.Performing Calculation
// let num = [4,9,16,25];
// let sqrt = num.map(Math.sqrt);
// console.log(sqrt);

//2>> FILTER FUNCTION
//Use cases 1.Filtering data
// let num = [1,2,3,4,5,6];
// let evens = num.filter(num => num % 2 === 0)
// console.log(evens);
//Use cases 2.Removing Unwanted Items (removing falsey value)
// let mixedArr = [0, "hello", false, 42, "", null, "world"];
// let truthyarr = mixedArr.filter(Boolean);
// console.log(truthyarr);
//Use cases 3.Finding items based on codition
// let users = [{name:"kunal", active:true}, {name:"Vijay", active:false}, {name:"Hardika", active:true}];
// let activeUsers = users.filter(users => users.active);
// console.log(activeUsers);

//3>> REDUCED FUNCTION 
//Use cases 1.Summing values
// let num = [1,3,4,5,56,6];
// let sum = num.reduce((n1,n2) => n1 + n2);
// console.log(sum);
//Use cases 2.Flattening Array
// let nestedArray = [[1, 2], [3, 4], [5, 6]];
// let flatArray = nestedArray.reduce((n1, n2) => n1.concat(n2), []);
// console.log(flatArray); 
//Use cases 3. COunting instances
// let fruits = ["apple", "banana", "apple", "orange", "banana", "kiwi"];
// let fruitCount = fruits.reduce((n1, fruit) => {
//     n1[fruit] =(n1[fruit] || 0) + 1;
//     return n1;
// }, {});
// console.log(fruitCount);

//Q6
// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   fetchData();


//Q7 
// let person = {
//     name: 'Kalprti pande',
//     address: {
//       street: '123 khajve rasta',
//       city: 'kidney',
//       zip: '12345'
//     },
//     contact: {
//       phone: '4324554342',
//       email: 'kalpritpande334@gmail.com'
//     }
//   };
//   let phoneNumber = person.contact?.phone;
//   console.log(phoneNumber); 
  
//   let anotherPerson = {
//     name: 'Kalprti pande',
//     address: {
//       street: '123 khajve rasta',
//       city: 'kidney',
//       zip: '12345'
//     }
//   };
//   let anotherPhoneNumber = anotherPerson.contact?.phone;
//   console.log(anotherPhoneNumber); 
  
