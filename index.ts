#! usr/bin/env node 
import inquirer from "inquirer";

console.log("Welcome to CodewithHamza CLI Number Guessing Game");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number (Number Limit from 1 to 5):",
    }
]);

if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the correct number.");
} else {
    console.log("Sorry, you guessed the wrong number.");
}