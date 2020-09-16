// Jayeshbhai 

function count(){
    array_elements = [2,5,4,7,6,8,7,2,5];

    for (var j = 0; j < array_elements.length -1; j++){
        if(array_elements[j] > array_elements[j+1]) {
            var temp = array_elements[j];
            array_elements[j] = array_elements[j+1];
            array_elements[j+1]= temp;
            j= -1;
        }
    }
    console.log(array_elements);
    var current = null;
    var cnt = 0;
    for(var i = 0; i < array_elements.length; i++){
        if(array_elements[i] != current){
            if(cnt>0){
                console.log(current + ' comes -->' + cnt + 'time<br>');
            }
            current = array_elements[i];
            cnt = 1;
        }else {
            cnt++;
        }
        if(cnt > 0){
            console.log(current + 'comes -->' + cnt + 'times<br>');
        }
    }
}

count();

// function count() {
//     array_elements = [2,5,4,7,6,8,7,2,5];
//     for (var j = 0; j < array_elements.length - 1; j++) { 

//         if (array_elements[j] > array_elements[j+1]) { 
//             var temp = array_elements[j]; 
//             array_elements[j] = array_elements[j + 1]; 
//             array_elements[j + 1] = temp; 
//             j = -1; 
//         } 
//     }
//      console.log(array_elements);


//     var current = null;
//     var cnt = 0;
    
//     for (var i = 0; i < array_elements.length; i++) {
         
//             if (array_elements[i] != current) {
//                 if (cnt > 0) {
//                     console.log(current + ' comes --> ' + cnt + ' times<br>');
//                 }
//                 current = array_elements[i];
//                 cnt = 1;
//             } else {
//                 cnt++;
//             }
        
//     }
//         if (cnt > 0) {
//             console.log(current + ' comes --> ' + cnt + ' times');
//         } 
//  }
// count();




// var a= [10 , 20 , 30 , 40];
// console.log(a);
// a[2] = "jsn";
// console.log(a);
// a[3] = true;
// console.log(a);
// a[20] = 34;
// console.log(a);

// // for (var index in a){
// //     console.log(index);
// //     console.log(a[index]);
// // }
// console.log("--------------");

// for (index of a){
//     console.log("value of "+ " " + index);
// }



// var a = [ 10 ,20 ,30 , 40];
// var i = 0;

// while( i < a.length){
//     console.log(a[i]);
//     i++;
// }
// console.log("=======");

// var b = [ 5 , 7 , 8 , 9 , 4];
// var j = 0;

// while( j < b.length){
//     console.log(b[j]);
//     j++;
// }



// var arr = [5, 5, 5, 2, 2, 2, 2, 2];
// var counted = [], count = [];
// var i = 0, j = 0, k = 0;
// while (k < arr.length) {
//     if (counted.indexOf(arr[k]) < 0) {
//         counted[i] = arr[k];
//         count[i] = 0;
//         for (j = 0; j < arr.length; j++) {
//             if (counted[i] == arr[j]) {
//                 count[i]++;
//             }
//         }
//         i++;
//     } else {
//         k++;
//     }
// }
