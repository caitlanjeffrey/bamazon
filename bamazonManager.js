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

function managerQuestions() {
    inquirer.prompt({
        name: "menuOptions",
        type: "list",
        message: "Select a menu option:",
        choices: ["Available Products", "Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
    }).then(managerAnswers => {
        switch(managerAnswers.menuOptions) {
            case "Available Products":
                availProducts();
                break;
            case "Low Inventory":
                lowInventory();
                break;
            case "Add to Inventory":
                addInventory();
                break;
            case "Add New Product":
                addProduct();
                break;
            case "Exit":
                closeShop();
                break;
            default:
                console.log("These are not the droids you are looking for.")
        }
    });
}

function availProducts() {
    connection.query(
        "SELECT * FROM products",
        function(err, results) {
            if (err) {
                throw err;
            }
            console.log("\n************************".cyan + " Available Products ".yellow + "****************************\n".cyan)
            console.table(results)
            managerQuestions()
        }
    )
}

function lowInventory() {
    var query = "SELECT * FROM products WHERE quantity < 5";
    connection.query(query, function(err, results) {
        if (err) {
            throw err;
        }
        console.log("\n************************".red + " Low Inventory ".red + "****************************\n".red)
        console.table(results)
        managerQuestions()
        }
    )
}

function addInventory() {
    console.log("howdy")
    connection.query(
        "SELECT *",
        function(err, results) {
            if (err) {
                throw err;
            }
            console.table(results)
            managerQuestions()
        }
    )
}

function addProduct() {
    console.log("dandy")
    connection.query(
        "SELECT *",
        function(err, results) {
            if (err) {
                throw err;
            }
            console.table(results)
            managerQuestions()
        }
    )
}

const closeShop = function() {
    connection.end();
} 