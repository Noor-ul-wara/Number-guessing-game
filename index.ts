#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = 13;
const answers = await inquirer.prompt([
    {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number:",

},

]);
if(answers.userGuessedNumber === randomNumber ){
    console.log("Congractulations! you guessed a correct number.");
}
else{
    console.log("sorry, you guessed wrong a number");
}