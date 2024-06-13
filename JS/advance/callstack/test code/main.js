function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return a / b;
    } catch (err) {
        // Log the error instead of crashing the application
        console.error('An error occurred while dividing numbers:', err.message);
        // Return a default value or an error indicator
        return null;
    }
}

// Test the function
console.log(divideNumbers(10, 2));  // Output: 5
console.log(divideNumbers(5, 0));   // Output: null (Error logged)
console.log(divideNumbers(8, 4));   // Output: 2

//spread

// rest

//desctructure

//closure

/* 

Two function bundled together and 
*/

