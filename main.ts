#! /usr/bin/env node

import inquirer from "inquirer";

let comp_num: number = Math.random() * 10;

console.log(comp_num);

// let rounded_comp_num = comp_num.toFixed(1)
let rounded_comp_num: number = Math.round(comp_num);

console.log(rounded_comp_num);

// 0,1,2,3,4,5,6,7,8,9,10 // possible outcomes.
//total possible outcomes = 11
// 11/3 = 3.67

let computer_choice: string;

if (rounded_comp_num < 3.67) {
  computer_choice = "Rock";
} else if (rounded_comp_num >= 3.67 && rounded_comp_num <= 7.34) {
  computer_choice = "Paper";
} else {
  computer_choice = "Scissor";
}

let user_choice = await inquirer.prompt([
  {
    name: "input",
    type: "list",
    choices: ["Rock", "Paper", "Scissor"],
    message: "Pick One:",
  },
]);

if (user_choice.input == "Rock") {
  if (computer_choice == "Rock") {
    console.log("It's a Tie");
  } 
  else if (computer_choice == "Paper") {
    console.log("Computer Won");
  } 
  else {
    console.log("You Won");
  }
}
else if (user_choice.input == "Paper") {
  if (computer_choice == "Rock") {
    console.log("You won");
  } else if (computer_choice == "Paper") {
    console.log("It's a Tie");
  } else {
    console.log("Computer Won");
  }
} 
else{ // user choice --> scissor
    if (computer_choice == "Rock") {
        console.log("Computer won");
      } else if (computer_choice == "Paper") {
        console.log("You Won");
      } else {
        console.log("It's a Tie");
      } 
}
console.log("Computer's choice was",computer_choice)