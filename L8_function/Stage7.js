// Variable Length arguments array // with parameters  // ES5
//argument is like a structure in array
function sum()
{
  let r = 0;
  console.log("Entering function");
  for(let i=0;i<arguments.length;i++)
  // arguments length 
  {
    r = r + arguments[i];
  }
  console.log("Leaving function");
  return r;
}

let result = sum(10,20,30,40); // with parameters
// variable length arguments 

console.log("The sum is --> " + result);