const mysql = require("mysql")
const cTable = require('console.table');
const inquirer = require('inquirer');
const colors = require('colors')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
})

connection.connect(function(err){
    if (err) {
        throw err;
    }
    console.log("Welcome to Geoffry Aezos's Bamazon:".magenta, connection.threadId)
    managerQuestions()
})

const managerQuestions = function() {
    inquirer.prompt([
        {
            type: "checkbox",
            name: "menuOptions",
            message: "Select a menu option:",
            choices: ["Available Products", "Low Inventory", "Add to Inventory", "Add New Product"]
        },
    ]).then(managerAnswers => {
        console.log(managerAnswers)
        // verifyManager(managerAnswers)
    });
}

// const verifyManager = function() {
//     connection.query(query, function(err, response){
//         if (err) {
//             throw err;
//         }

//         if (answers[0]) {

//         }
//     })
// }