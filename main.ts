#! /usr/bin/env node

import inquirer from "inquirer"

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter some sentence for word counting: "
    }
])
const wordCount = answers.Sentence.trim().split(" ")

console.log(wordCount)

console.log(`Your word count is ${wordCount.length}`);