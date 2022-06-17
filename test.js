// // // import the function sum from the app.js file
// // const { sum } = require('./app.js');

// // // start your first test
// // test('adds 14 + 9 to equal 23', () => {
// //     //inside the test we call our sum function with 2 numbers
// //     let total = sum(14, 9);

// //     // we expect the sum of those 2 numbers to be 23
// //     expect(total).toBe(23);
// });

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One euro should be 127.9 japan yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(447,65); //1 euro son 127.9 japan yen , entonces 3.5 euros deberian ser = (3.5 * 127.9)
})

test("One euro should be 0.8 british pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(2.8); //1 euro son 0.8 british pound, entonces 3.5 euros deberian ser = (3.5 * 0.8)
})