/*jslint browser:true */
/*global console:true */
/*global window:true */
'use strict';

//The motive of the script is to execute a function using a string whose value is the function name
//printMe is a function that needs to be called when user passes the string "printMe"
var printMe = function (a, b) {
    console.log(a, b);
};

//We need to make this string to call the function printMe
var fnName = 'printMe';

(function (functionName) {
    //the variable fnName will be passed into functionName variable. Logging it so that users can be clear.
    console.log(functionName);
    //eval can be used to call a function with a string name. But eval should not be used as it is not safe and also performance wise, it is poor
    //eval(functionName)(1,2);
    
    //Every function will have arguments as a default variable that will hold all the argumens of the function. 
    console.log(arguments);
    
    // The first value in arguments list is the string [printMe in this case] whose name is the function to be called. So we need to take all the arguments apart from this first argument. For this we use slice emthod of array.
    
    //Slice method can be called using the below syntax. But this method unnecessarily creates an Array object. So we use Array.protoype.slice methos
    //var args = Array().slice.call(arguments,1);
    
    //Getting all the values in argumens array-like-object from index 1. Remember arguments is not an array, So we can't call arguments.splice() directly.
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(args);
    
    //arguments[0] is the string which contains the function to be called. Our function printMe is in windows scope. So searchign for the value
    var fn = window[arguments[0]];
    console.log(fn);
    if (typeof fn === 'function') {
        //Apply is used because, it will take the argument list as an array, and it passes the array to the function to be called. 
        fn.apply(undefined, args);
    }
})(fnName, 1, 2);
