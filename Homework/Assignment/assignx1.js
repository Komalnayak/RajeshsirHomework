//15. An array has 4 elements. The first element stores the number of 2000Rs notes Pankaj has.
//  The second element stores the number of 500Rs notes Pankaj has. 
//  The third element strores the number of 100Rs notes Pankaj has. 
//  Store in the fourth location the total amount of Rs. Pankaj has.

var notes = [2000,500,100,[]];
notes[3] = 0;

for (i= 0; i < notes.length - 1; i++){
    notes[3] = notes[3] + notes[i];
}
    console.log(notes[3]);
    console.log(notes);

//15.1 multiplication with numbers of notes

var notes = [2000,500,100];
var number = [2,5,3]; // how many notes
sum = 0;

for (i= 0; i < number.length; i++){
    sum += notes[i] * number[i]; // --> sum = sum +notes[i] *number[i]
    notes[3] = sum; // asign the sum in to Array in notes[3]elements 
 
}
    console.log(sum);
    console.log(notes); 

// 8. An array of size 5 stores the name of 5 months in it. Print the number of days for each month element of the array.

// months  = [Jan,feb,march];
// days = [31,28,30];

// for( i = 0 ; i< days.length; i++){
//     console.log(months[i] + "has" + days[i]);
// }

//10. An array has 9 element.The first three elements of an array stores the year, month and day of the Birthdate of Manoj. The next three elements store Birthdate of Rajan. Find the age difference betweeen Manoj and Rajan and store it in the last three elements. complate

// var a =[["Manoj",{year:1997,month :3,date: 30}],["Rajan",{year:1995,month : 6,date :14}],["diffarance", {y : " ", m :" ", d : " "}]];

// a[2][1].y = (a[0][1].year - a[1][1].year);
// a[2][1].m = (a[0][1].month - a[1][1].month);
// a[2][1].d = (a[0][1].date - a[1][1].date);

// // console.log(a[0]);
// // console.log(a[1]);
// console.log(a[2]);
// console.log(a);


// 12....Given a date find the zodiac sign of an individual

// function getZodiac(month,date){
// var month = "January";
// var date = 20;
// if(month == "January"){
//     if(date < 20){
//         console.log("Your Zodiac sign is ==> Capricorn")
//     }else{
//         console.log("Your Zodiac sign is ==> Aquarius")
//     }

//     }else if(month == "February"){
//     if(date < 19){
//         console.log("Your Zodiac sign is ==> Aquarius")
//     }else{
//         console.log("Your Zodiac sign is ==> Pieces")
//     }

//     }
//     else if(month == "March"){
//         if(date < 21){
//             console.log("Your Zodiac sign is ==> Pieces")
//         }else{
//             console.log("Your Zodiac sign is ==> Aries")
//         }
//     }
//     else if(month == "Apri"){
//         if(date < 20){
//             console.log("Your Zodiac sign is ==> Aries")
//         }else{
//             console.log("Your Zodiac sign is ==> Taurus")
//         }
//     }
//     else if(month == "May"){
//     if(date < 21){
//         console.log("Your Zodiac sign is ==> Taurus")
//     }else{
//         console.log("Your Zodiac sign is ==> Gemini")
//     }
//     }
//     else if(month == "June"){
//     if(date < 21){
//         console.log("Your Zodiac sign is ==> Gemini")
//     }else{
//         console.log("Your Zodiac sign is ==> Cancer")
//     }
//     }
//     else if(month == "July"){
//         if(date < 23){
//             console.log("Your Zodiac sign is ==> Cancer")
//         }else{
//             console.log("Your Zodiac sign is ==> Leo")
//         }
//     }
//     else if(month == "August"){
//         if(date < 23){
//             console.log("Your Zodiac sign is ==> Leo")
//         }else{
//             console.log("Your Zodiac sign is ==> Virgo")
//         }
//     }
//     else if(month == "September"){
//         if(date < 23){
//             console.log("Your Zodiac sign is ==> Virgo")
//         }else{
//             console.log("Your Zodiac sign is ==> Libra")
//         }
//     }
//     else if(month == "Octomber"){
//         if(date < 23){
//             console.log("Your Zodiac sign is ==> Libra")
//         }else{
//             console.log("Your Zodiac sign is ==> Scorpio")
//         }
//     }
//     else if(month == "Novemer"){
//         if(date < 22){
//             console.log("Your Zodiac sign is ==> Scorpio")
//         }else{
//             console.log("Your Zodiac sign is ==> Sagittarius")
//         }
//     }
//     else if(month == "December"){
//         if(date < 22){
//             console.log("Your Zodiac sign is ==> Sagittarius")
//         }else{
//             console.log("Your Zodiac sign is ==> Capricorn")
//         }
//     }
// }

// getZodiac("november",23);
        

// function isPrime(n){
// //     if(n===2){
// //       return true;
// //     }
// //   if (!Number.isInteger(n) || n < 2 || !(n % 2)){
// //     return false;
// //   }
// //   for (let i = 3 ; i <= Math.sqrt(n); i++ , i++){
// //       // for (let i = 3, i < n-1, i++ , i++) {
// //         if ( n % i === 0){
// //           return false;
// //         }
// //       }
// //       return true;
// //   }

// //   console.log(isPrime(13));
  


// //
// var GetWeekDays = function (format) {
//     var weekDays = {};

//     var curDate = new Date();
//     for (var i = 0; i < 7; ++i) {
//         weekDays[curDate.getDay()] = curDate.toLocaleDateString('ru-RU', {
//             weekday: format ? format : 'short'
//         });

//         curDate.setDate(curDate.getDate() + 1);
//     }

//     return weekDays;
// };

// GetMonthNames = function (format) {
//     var monthNames = {};

//     var curDate = new Date();
//     for (var i = 0; i < 12; ++i) {
//         monthNames[curDate.getMonth()] = curDate.toLocaleDateString('ru-RU',
//          {
//             month: format ? format : 'long'
//         });

//         curDate.setMonth(curDate.getMonth() + 1);
//     }

//     return monthNames;

// }; 
