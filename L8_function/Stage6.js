//Arguments array
function sum()
{
  console.log("Entering function");
  let r = arguments[0] + arguments[1] + arguments[2] + arguments[3];// If the arguments array and actual parameter has to have same entity
  console.log(arguments);
  console.log("Leaving function");
  return r;
}

let result = sum(10,60,70);

console.log("The sum is --> " + result);