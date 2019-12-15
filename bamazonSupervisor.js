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
    console.log("Welcome District Supervisor - Stanley: ".magenta, connection.threadId)
    supervisorQuestions()
})


function supervisorQuestions() {

    inquirer.prompt({
        name: "menuOptions",
        type: "list",
        message: "Select a menu option:",
        choices: ["Prodcut Sales by Department", "Create New Department", "Exit"]
    }).then(supervisorAnswers => {
        switch(supervisorAnswers.menuOptions) {
            case "Prodcut Sales by Department":
                productSales();
                break;
            case "Create New Department":
                // newDepartment();
                break;
            case "Exit":
                closeShop();
                break;
            default:
                console.log("These are not the droids you are looking for.")
        }
    });
}

function productSales() {
    var query = "SELECT * FROM products",

    connection.query(query, function(err, results) {
        if (err) {
            throw err;
        }
        console.log("\n************************".red + " Low Inventory ".red + "****************************\n".red)
        console.table(results)
        inventoryQuestions()
        }
    )
}

const closeShop = function() {
    connection.end();
}
