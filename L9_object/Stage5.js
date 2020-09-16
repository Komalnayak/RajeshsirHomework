var amit = {
    a : 10,
    b : 20
};
console.log(amit);
console.log(amit.a);
console.log(amit.b);
var moti = {
    m : 30,
    n : 40
};
console.log(moti);
console.log(moti.m);
console.log(moti.n);
var raju = {
    i : 50,
    j : 60
};
console.log(raju);
console.log(raju.i);
console.log(raju.j);
amit.dost = moti;
moti.friend = raju;
raju.mitra = amit;
console.log(amit);
console.log(amit.dost);
console.log(amit.dost.m);
console.log(amit.dost.n);
console.log(moti);
console.log(moti.friend);
console.log(raju);
console.log(raju.mitra);
console.log(amit.dost.friend.i);
console.log(amit.dost.friend.mitra.a);