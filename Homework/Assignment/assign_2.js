var a = [10,20,30,25,45,40,50,60,70,80];
var b = [11,22,33,44,45,55,56,66,77,88];
var add = [];
var sub = [];
var multiply = [];

for(i = 0 ; i < a.length; i++){
    for(j = 0; i < b.length; i++){ 
        console.log(i);

        add.push(a[i] + b[i]);
        sub.push(a[i] - b[i]);
        multiply.push(a[i] * b[i]);
    }
}

console.log(add);
console.log(sub);
console.log(multiply);
