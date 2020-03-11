"use strict";

var array = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8 ];

var counter = 0;


function foo(array){
   
    array.forEach(function(value, index) {   
        
    Array.isArray(value) ? foo(value) : counter += value;         
    
    });

    return counter;

}
console.log(foo(array));
