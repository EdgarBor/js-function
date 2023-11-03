//task1

// function person(user) {
//     let age = prompt("Yasinizi daxil edin: ");

//     if(!isNaN(age) && age >= 18) {
//         alert("Salam, xos gelmisiniz: "+user);
//     } else {
//         alert("Hormetli, " + user + " siz sayta daxil ola bilmediniz!");
//     }
// }

// let user = prompt("Adinizi daxil edin: ");
// if (user) {
//     person(user);
// } else {
//     alert("Zehmet olmasa adinizi daxil edin!");
// }



//task2

// function reverseString(str) {
//     let newString = "";

//     for(let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// let str = prompt("Zehmet olmasa ad daxil edin: ");
// if (str) {
//     let reversedStr = reverseString(str);
//     alert(reversedStr);
// } else {
//     alert("Zehmet olmasa yeniden soz yazin!");
// }



// // task 3

// function reverceArray(arr) {
//     let newArray = [];

//     for (let i = arr.length; i >= 0; i--) {
//         newArray.push(arr[i]);
//     }
//     return [arr, newArray];
// }

// let cars = ["audi", "bmw", "honda", "chevrolet", "mersedes"];
// let result = reverceArray(cars);

// console.log("Original Array: " + result[0]);
// console.log("Cevirilmis Array: " + result[1]);



// Task 4

// function findBigNumber(num) {
//     let max = num[0];

//     for (let i = 0; i < num.length; i++) {
//         if(num[i] > max) {
//             max = num[i];
//         }
//     }
//     return max;
// }

// let numberArray = ["5", "8", "7", "2", "6", "4"];
// let result = findBigNumber(numberArray);

// console.log("Bu reqem en boyukdur: ", result);



// task 5

// function averageNumber(num) {
//     let sum = 0;

//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     } 
//     return sum / num.length;
// }

// let arr = [1, 4, 5, 7, 9];
// console.log(averageNumber(arr));