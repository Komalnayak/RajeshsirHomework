log = console.log;


// 1.Given an Array that has two element. Find the greater element. Print the element and it's index position.
// let arr = [9,2];


// if (arr[0]> arr[1]){
//     log(`The greatest element of the given array is = ${arr[0]} and has index 0`)
//     }
// else{
//     log(`The greatest element of the given array is = ${arr[1]} and has index 1`);
// }

// 2.Given an Array that has three element. Find the greatest element. Print the element and its index position.
// let arr  = [31,5,2];
// let gretestElement = [];

// if(arr[0] > arr[1] && arr[0] > arr[2]){
//     log(`The greatest element of the given array is = ${arr[0]} and has index 0`) 
//     }
//     else if(arr[1]> arr[2]){
//         log(`The greatest element of the given array is = ${arr[1]} and has index 1`) 
//     }
//     else 
//     {log(`The greatest element of the given array is = ${arr[2]} and has index 2`) }


//4.An Array has 10 element.  All the elements are having values between 1 and 30, Print all the prime numbers present in the array. Also print the total number of prime elements found.

// // // function isPrimeNum(num){

// //     if(num <= 1){
// //         return false;
// //     }
// //     for(let i = 2; i < num; i++){
// //         if(num % i == 0){
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// // // log(isPrimeNum(2));

// // function getPrimeNum(...numbers){
// //     let primeNumbers = [];
// //     for(let i = 0; i<numbers.length; i++){
// //         if(isPrimeNum(numbers[i])){
// //             primeNumbers.push(numbers[i]);
// //         }
// //     }

// // 5. An Array has 10 element.  All the elements are single character string. Print all the vowels present in the array. Also print the total number of vowels found.
// // 6. An Array has 10 element.  All the elements are single character string. Print total numbers of vowels and consonants present in the array. 

// var arr = ['a','e','i','k','m','o','u'];
// var vowel = [];
// var consonant = [];

// for (i = 0 ; i < arr.length; i++){
//     if(arr[i] == 'a'|| arr[i] == 'u' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
//         vowel.push(arr[i]);
//         //vowel = arr[i];
//     }
//     else if(arr[i] != vowel){
//         consonant.push(arr[i]);
//     }
// }
// log(`${vowel}`)
// log(`${vowel.length}`)
// log(`${consonant}`)
// log(`${consonant.length}`)


// 7. An Array has 4 element. It is storing the marks of Physics, Chemistry, Maths and Biology in each element respectively. Find the percentage for PCM and PCB
// let marks = [80,60,85,70];

// function result(p,c,m,b)
// {
//   console.log("Entering function marks");
//   var pcm = p + c + m;
//   var percentage = pcm * 100/300;
//   console.log("The pcm is --> " + pcm);
//   console.log("Percentage of pcm =" + percentage);
//   console.log("_____________");

//   var pcb = p + c + b;
//   percentage = pcb * 100/300;

//   console.log("The pcb is --> " + pcb);
//   console.log("Percentage of pcb =" + percentage);
//   console.log("Leaving function");

// result(...marks);

//8. An array of size 5 stores the name of 5 months in it. Print the number of days for each month element of the array.

// var month = ['jan', 'feb' ,'march', 'April','may'];
// var days = 0;

// for(var i =0 ; i < month.length; i++){
//     if (month[i] == 'feb'){
//         log(`Number of the month is are 29`);
//     }else if(month[i] == 'jan' || month[i] =='march' || month[i] == 'may'){
//         log('Number of the month are 31')
//     }
//     else{
//         log('Number of the month are 30')
//     }
// }

