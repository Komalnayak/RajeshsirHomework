// select the sentance with doble click and press ALT then select another sentance which wants to change to same name 
//SUM programme
const log = console.log;

let arr = [9,6,8];
let gretestElement = arr[0]
let index = 0;  
let sum = 0;
for(i=0;i<arr.length;i++)
{
    log(`Befor if condition = ${i}`);
    sum += arr[i];
    if(arr[i]>gretestElement){
        log(`After if condition arr[i] = ${arr[i]}`)
        log(`After if condition gretestElement = ${gretestElement}`)
        log(`After if condition = ${i}`)
        gretestElement  = arr[i];
        index = i;
       
    }
    log(`sum is = ${sum}`);
    log(`___`)    
 }

