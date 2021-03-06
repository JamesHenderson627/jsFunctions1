//  Part I

// ----------------------------
// write your own forEach() function that takes an array and a function
// ----------------------------

function forEach(array, callback){
    // YOUR CODE HERE
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// tests
// ---
var total = 1
forEach([1, 2, 3, 4], function(a){ total *= a; })
console.assert(total === 24)

// ----------------------------
// using forEach() from above, write your own reduce()
// that takes an array and a function
// ----------------------------

function reduce(array, callback){
    // YOUR CODE HERE
    var total = array[0];
    // for (i = 0; i < array.length; i++) {
    //     total = callback(array[i], total);
    // }
    forEach(array, function(element) {
        total = callback(element, total);
    })
    return total;
}

// tests
// ---
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
)

// ----------------------------
// using forEach() from above, write your own map()
// that takes an array and a function
// ----------------------------

function map(array, callback){
    // YOUR CODE HERE
    newArray = [];
    // for (i = 0; i < array.length; i++) {
    //     newArray.push(callback(array[i]))
    // }
    forEach(array, function(element) {
        newArray.push(callback(element))
    })
    return newArray;
}

// tests
// ---
var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

// ----------------------------
// using reduce() from above, write your own filter()
// that takes an array and a function
// ----------------------------

function filter(array, callback){
    // YOUR CODE HERE
    newArray = [];
    total = [0];
    // for (i = 0; i < array.length; i++) {
    //     if (callback(array[i])) {
    //         newArray.push(array[i]);
    //     }
    // }
    // return newArray;
    reduce(array, function(element) {
        total = callback(element, total);
        if (total) {
            newArray.push(element);
        }
    })
    return newArray;
}

// tests
// ---
var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)