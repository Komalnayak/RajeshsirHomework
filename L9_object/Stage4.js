//Objecct.prevent Extensions(obj);
//CRUD
//*---

var obj = {
    a : 10,
    b : 20
};
console.log(obj);

obj.c = 90; 
Object.preventExtensions(obj);

console.log(obj);
obj.b = 80;
console.log(typeof obj.a);

console.log(obj);
//Object.isPreventExtensions(obj);
console.log(Object.isExtensible(obj));
delete obj.b;
console.log(obj);




// console.log(obj.b);



// obj.c = 30;

// console.log(obj.c);

// console.log(obj);



// //delete obj.c;

// console.log(obj);

// delete obj.c;
// console.log(",,");
// obj.isExtensible();


// //Object.Freeze(obj);
// //Object.Seal(obj);
