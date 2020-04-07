const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

// Let's write some tests for those functions

const result = subtract(4,3);
const expected = 2;

if (result !== expected) {
    throw new Error(`${result} is not ${expected}!`);
}

console.log("Test 1 works!");
