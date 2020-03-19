"use strict";


function subArr(arr) {
    var count = 0;
    manyArr(arr);
    function manyArr(arr) {
    for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
    manyArr(arr[i]);
    } else {
    count += arr[i];
    }
    }
    }
    return count;
    }
    console.log(subArr([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8 ]));

// var array = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8 ];

// var counter = 0;

// function foo(array){
    
//     for (let i = 0; i < array.length; i++) {
        
//         if (Array.isArray(array[i])) {
             
//             foo(array[i]);
        
//         } else {
            
//             counter += array[i];
            
//         }
        
//     }
    
//     return counter;
    
// }
// console.log(foo(array));