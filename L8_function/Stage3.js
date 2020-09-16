// actual parameter and formal parameter ---> take value by Possining (parameter) 
// we can deside to give dafault value but dafault value must given to righthand side

// function sum(a,b = 20)
// {
//   console.log("Entering function");
//   let sum = a + b;
//   console.log("The sum of a & b is --> " + sum);
//   console.log("Leaving function");
// }

// sum(5);

// function sum1(c =10,d =30) //c got the actual parameter value :9 and d has formal parameter 30 "39"
 // { 
//   console.log("Entering function1");
//   let sum1 = c + d;
//   console.log("The sum of c & d is ----> " + sum1);
//   console.log("Leaving function");
// }
 
//sum1(9); //"39"

// function sum1(c =10 , d)   // c got the actual parameter value :60 and d has no value so should get "NAN"
// {
//   console.log("Entering function1");
//   let sum1 = c + d;
//   console.log("The sum of c & d is ----> " + sum1);
//   console.log("Leaving function");
// }
 
// sum1(60);  // "NAN" // we can deside to give dafault value but dafault value must given to righthand side

function sum1(c =10 , d)   // c got the actual parameter value :60 and d takes actual para 40 ---> 100
{
  console.log("Entering function1");
  let sum1 = c + d;
  console.log("The sum of c & d is ----> " + sum1);
  console.log("Leaving function");
}
 
sum1(60, 40);  // 100