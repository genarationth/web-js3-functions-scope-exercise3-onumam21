// Function to calculate the total monthly cost including fees and interest
function calculateMonthlyCost(transactions) {
    // Define the fixed fee and interest rate
    const fixedFee = 3;
    const interestRate = 0.001;
    
    // Initialize the total cost to 0
    let totalCost = 0;
    
    // Loop through each transaction in the list
    for (let i = 0; i < transactions.length; i++) {
        // Get the current transaction amount
        let transaction = transactions[i];
        
        // Calculate the interest fee for this transaction
        let interestFee = transaction * interestRate;
        
        // Calculate the total fee for this transaction (fixed fee + interest fee)
        let totalFee = fixedFee + interestFee;
        
        // Add the transaction amount and total fee to the total cost
        totalCost += transaction + totalFee;
    }
    
    // Return the total cost
    return totalCost;
}

// Example usage:
const transactions = [100, 200, 300];
const totalCost = calculateMonthlyCost(transactions);
console.log(totalCost);  // Output the total cost

// Part 1: Input and Greet 3 Friends
// Function to greet 3 friends
function greetFriends(name1, name2, name3) {
    // Print a welcome message with the names
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
}

// Example usage:
greetFriends("Alice", "Bob", "Charlie");

// Part 2: Calculate Age
// Function to calculate age from birth year
function calculateAge(birthYear) {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Calculate the age
    let age = currentYear - birthYear;
    
    // Return the calculated age
    return age;
}

// Example usage:
const age = calculateAge(1990);
console.log(age);  // Output the age

// Part 3: Greet Friends with Age
// Function to greet 3 friends with their ages
function greetFriendsWithAge(name1, birthYear1, name2, birthYear2, name3, birthYear3) {
    // Calculate the ages of the friends
    const age1 = calculateAge(birthYear1);
    const age2 = calculateAge(birthYear2);
    const age3 = calculateAge(birthYear3);
    
    // Print a welcome message with the names and ages
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`);
}

// Example usage:
greetFriendsWithAge("Alice", 1990, "Bob", 1985, "Charlie", 2000);

// Challenge Yourself: Grading Rubric
// Part 1: Pass or Fail
// Function to check if a student passes
function isPassing(score) {
    // Return true if the score is 5 or greater, otherwise return false
    return score >= 5;
}

// Example usage:
console.log(isPassing(7));  // Output: true
console.log(isPassing(4));  // Output: false

// Part 2: Excellent Grade
// Function to check if a student passes and if their grade is excellent
function checkGrade(score) {
    // Check if the score is passing
    let result = score >= 5;
    
    // Print "Excellent" if the score is greater than 8
    if (score > 8) {
        console.log("Excellent");
    }
    
    // Return the pass/fail result
    return result;
}

// Example usage:
console.log(checkGrade(9));  // Output: Excellent, true
console.log(checkGrade(7));  // Output: true

// Part 3: Perfect Grade
// Function to check if a student passes, if their grade is excellent, and if it's perfect
function checkGrade(score) {
    // Check if the score is passing
    let result = score >= 5;
    
    // Print "Excellent" if the score is greater than 8
    if (score > 8) {
        console.log("Excellent");
    }
    
    // Print "Perfect" if the score is 11
    if (score === 11) {
        console.log("Perfect");
    }
    
    // Return the pass/fail result
    return result;
}

// Example usage:
console.log(checkGrade(11));  // Output: Excellent, Perfect, true
console.log(checkGrade(9));   // Output: Excellent, true
console.log(checkGrade(7));   // Output: true
