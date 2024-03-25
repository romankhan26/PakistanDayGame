#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let start = await inquirer.prompt({
  message: chalk.bold.green("ENTER TO START"),
  type: "input",
  name: "start",
});
if (start.start === "" || start.start === undefined) {
  console.log(chalk.bold.green("\n\t  ✅ ✅  START THE GAME  ✅ ✅\t\n"));
  console.log(
    chalk.bold.blue(
      "\t\t\n\nThe game comprises 7 basic questions about Pakistan. On giving correct answer for each question, you will get 1 point and after all of the questions you will be given the sum of points you gained...\n\n\t\t   "
    )
  );
}

let score = 0;
//Question01
const answer1 = await inquirer.prompt({
  message: chalk.bold.yellow("In which month is Pakistan Day celebrated?"),
  type: "list",
  name: "Month",
  choices: [
    chalk.blue.italic("🔴 January"),
    chalk.blue.italic("🟠 November"),
    chalk.blue.italic("🟡 March"),
    chalk.blue.italic("🟢 August"),
  ],
});
if (answer1.Month === chalk.blue.italic("🟡 March")) {
  console.log(
    chalk.green.bold("\n\t🎉🎉Congratulations! You have got 1 point!🎉🎉\t\n")
  );
  score++;
} else {
  console.log(
    chalk.red.bold(
      '\n\t⚠ You have got 0 point!...Correct Answer was "March"\t\n'
    )
  );
}
//condition
let nqeus1 = await inquirer.prompt({
  message: chalk.cyanBright.italic.bold('Type "N" for next Question :'),
  type: "input",
  name: "next",
});
if (nqeus1.next === "N") {
  console.log(chalk.bold.cyanBright("\n\t➡  NEXT QUESTION:\t\n"));
  console.log(chalk.cyanBright.italic("\n\tQuestion:02\t\n"));
}
//Question02
const answer2 = await inquirer.prompt({
  message: chalk.bold.yellow("What year was the Lahore Resolution passed?"),
  type: "list",
  name: "year",
  choices: [
    chalk.bold.blueBright("🔴 1947"),
    chalk.bold.blueBright("🟠 1876"),
    chalk.bold.blueBright("🟡 1965"),
    chalk.bold.blueBright("🟢 1940"),
  ],
});

if (answer2.year === chalk.bold.blueBright("🟢 1940")) {
  console.log(
    chalk.green.bold("\n\t🎉🎉Congratulations! You have got 1 point!🎉🎉\t\n")
  );
  score++;
} else {
  console.log(
    chalk.red.bold('\n\t⚠ You have got 0 point!...Correct Answer was "1940"\t\n')
  );
}
//condition 2
let nqeus2 = await inquirer.prompt({
  message: chalk.cyanBright.italic.bold('Type "N" for next Question :'),
  type: "input",
  name: "next",
});
if (nqeus2.next === "N") {
  console.log(chalk.bold.green("\t\n➡  NEXT QUESTION:\n\t"));
  console.log(chalk.green.italic("\n\tQuestion:03\t\n"));
}

//Question03
const answer3 = await inquirer.prompt({
  message: chalk.bold.yellow("Who is considered the founder of Pakistan?"),
  type: "list",
  name: "name",
  choices: [
    chalk.bold.blueBright("🔴 Fatima Jinnah"),
    chalk.bold.blueBright("🟠 Allama Iqbal"),
    chalk.bold.blueBright("🟡 Muhammad Ali Jinnah"),
    chalk.bold.blueBright("🟢 Imran Khan"),
  ],
});

if (answer3.name === chalk.bold.blueBright("🟡 Muhammad Ali Jinnah")) {
  console.log(
    chalk.green.bold("\n\t🎉🎉Congratulations! You have got 1 point!🎉🎉\t\n")
  );
  score++;
} else {
  console.log(
    chalk.red.bold(
      '\n\t⚠ You have got 0 point!...Correct Answer was "Muhammad Ali Jinnah"\t\n'
    )
  );
}

//condition 3
let nqeus3 = await inquirer.prompt({
  message: chalk.cyanBright.italic.bold('Type "N" for next Question :'),
  type: "input",
  name: "next",
});
if (nqeus3.next === "N") {
  console.log(chalk.bold.green("\n\t➡  NEXT QUESTION:\t\n"));
  console.log(chalk.green.italic("\n\tQuestion:04\t\n"));
}

//Question 04
const answer4 = await inquirer.prompt({
  message: chalk.bold.yellow("What is the capital city of Pakistan?"),
  type: "list",
  name: "city",
  choices: [
    chalk.bold.blueBright("🔴 Jamshoro"),
    chalk.bold.blueBright("🟠 Islamabad"),
    chalk.bold.blueBright("🟡 Karachi"),
    chalk.bold.blueBright("🟢 Peshawar"),
  ],
});

if (answer4.city === chalk.bold.blueBright("🟠 Islamabad")) {
  console.log(
    chalk.green.bold("\n\t🎉🎉Congratulations! You have got 1 point!🎉🎉\t\n")
  );
  score++;
} else {
  console.log(
    chalk.red.bold(
      '\n\t⚠ You have got 0 point!...Correct Answer was "Islamabad"\t\n'
    )
  );
}

//cnodition 04
let nqeus4 = await inquirer.prompt({
  message: chalk.cyanBright.italic.bold('Type "N" for next Question :'),
  type: "input",
  name: "next",
});
if (nqeus4.next === "N") {
  console.log(chalk.bold.green("\n\t➡  NEXT QUESTION:\t\n"));
  console.log(chalk.green.italic("\t\nQuestion:05\n\t"));
}

//Question 05
const answer5 = await inquirer.prompt({
  message: chalk.bold.yellow("In what month did Pakistan gain independence?"),
  type: "list",
  name: "month1",
  choices: [
    chalk.bold.blueBright("🔴 March"),
    chalk.bold.blueBright("🟠 April"),
    chalk.bold.blueBright("🟡 August"),
    chalk.bold.blueBright("🟢 December"),
  ],
});

if (answer5.month1 === chalk.bold.blueBright("🟡 August")) {
  console.log(
    chalk.green.bold("\n\t🎉🎉Congratulations! You have got 1 point!🎉🎉\t\n")
  );
  score++;
} else {
  console.log(
    chalk.red.bold(
      '\n\t⚠ You have got 0 point!...Correct Answer was "August"\t\n'
    )
  );
}

//condition 05
let nqeus5 = await inquirer.prompt({
  message: chalk.cyanBright.italic.bold('Type "N" for next Question :'),
  type: "input",
  name: "next",
});
if (nqeus5.next === "N") {
  console.log(chalk.bold.green("\n\t➡  SECOND LAST QUESTION:\t\n"));
  console.log(chalk.green.italic("\n\tQuestion:06\t\n"));
}

//Question 06
const answer6 = await inquirer.prompt({
  message: chalk.bold.yellow("What is the national flower of Pakistan?"),
  type: "list",
  name: "flower",
  choices: [
    chalk.bold.blueBright("🔴 Sunflower"),
    chalk.bold.blueBright("🟠 Jasmine"),
    chalk.bold.blueBright("🟡 Tulip"),
    chalk.bold.blueBright("🟢 Rose"),
  ],
});

if (answer6.flower === chalk.bold.blueBright("🟠 Jasmine")) {
  console.log(
    chalk.green.bold("\n\t🎉🎉Congratulations! You have got 1 point!🎉🎉\t\n")
  );
  score++;
} else {
  console.log(
    chalk.red.bold(
      '\n\t⚠ You have got 0 point!...Correct Answer was "Jasmine"\t\n'
    )
  );
}

//condition 06
let nqeus6 = await inquirer.prompt({
  message: chalk.cyanBright.italic.bold('Type "N" for next Question :'),
  type: "input",
  name: "next",
});
if (nqeus6.next === "N") {
  console.log(chalk.bold.green("\n\t➡  LAST QUESTION:\t\n"));
  console.log(chalk.green.italic("\n\tQuestion:07\t\n"));
}

//Question 07
const answer7 = await inquirer.prompt({
  message: chalk.bold.yellow("What is the national language of Pakistan?"),
  type: "list",
  name: "language",
  choices: [
    chalk.bold.blueBright("🔴 Urdu"),
    chalk.bold.blueBright("🟠 French"),
    chalk.bold.blueBright("🟡 Persian"),
    chalk.bold.blueBright("🟢 Arabic"),
  ],
});

if (answer7.language === chalk.bold.blueBright("🔴 Urdu")) {
  console.log(
    chalk.green.bold("\n\t🎉🎉Congratulations! You have got 1 point!🎉🎉\t\n")
  );
  score++;
} else {
  console.log(
    chalk.red.bold(
      '\n\t⚠ You have got 0 point!...Correct Answer was "Urdu"\t\n'
    )
  );
}

if (score === 7) {
  console.log(
    chalk.bold.green(
      `\n\tExcellent! You've answered all the Questions correct.\t\n`
    )
  );
  console.log(chalk.bold.bgGreen("\n\tYOUR SCORE : 07 / 07\t\n"));
} else if (score === 6) {
  console.log(
    chalk.bold.green(
      `\n\tFantastic! You've answered almost Questions correct.\t\n`
    )
  );
  console.log(chalk.bold.bgGreen("\n\tYOUR SCORE : 06 / 07\t\n"));
} else if (score === 5) {
  console.log(
    chalk.bold.green(
      `\n\t Very Good! You've answered most of the Questions correct.\t\n`
    )
  );
  console.log(chalk.bold.bgGreen("\n\tYOUR SCORE : 05 / 07\t\n"));
} else if (score === 4) {
  console.log(
    chalk.bold.yellow(`\n\tGood! You've answered four Questions correct.\t\n`)
  );
  console.log(chalk.bold.bgYellow("\n\tYOUR SCORE : 04 / 07\t\n"));
} else if (score === 3) {
  console.log(
    chalk.bold.yellow(
      `\n\tFairly! You've answered three Questions correct.\t\n`
    )
  );
  console.log(chalk.bold.bgYellow("\n\tYOUR SCORE : 03 / 07\t\n"));
} else if (score === 2) {
  console.log(
    chalk.bold.yellow(
      `\n\tJust a smidgen!! You've answered two Questions correct.\t\n`
    )
  );
  console.log(chalk.bold.bgYellow("\n\tYOUR SCORE : 02 / 07\t\n"));
} else if (score === 1) {
  console.log(
    chalk.bold.red(`\n\tYou've answered only one Question correct.\t\n`)
  );
  console.log(chalk.bold.bgRed("\n\tYOUR SCORE : 01 / 07\t\n"));
} else {
  console.log(chalk.bold.red("\n\t⚠ Try Again! ⚠\t\n"));
  console.log(
    chalk.bold.red("\n\tYou have answered all the questions incorrect\t\n")
  );
  console.log(chalk.bold.bgRed("\n\tOUR SCORE : 00 / 07\t\n"));
}

console.log(
  chalk.bold.bgBlueBright("\t\n🟥🟧🟨🟩🟦🟪🟫 THE END 🟥🟧🟨🟩🟦🟪🟫\n\t")
);
