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
    productsTable()
})

const productsTable = function() {

    connection.query(
        "SELECT id, product, department, price, sales FROM products",
        function(err, results) {
            if (err) {
                throw err;
            }
            console.log("\n************************".cyan + " New Order ".yellow + "****************************\n".cyan)
            console.table(results)
            customerQuestions()
        }
    )
}

const customerQuestions = function() {

    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Select a Product ID to add to your cart."
        },
        {
            type: "number",
            name: "quantity",
            message: "Please select a quantity to add to your order."
        }
    ]).then(answers => {
        verifyQuantity(answers)
    });
}

const verifyQuantity = function(answers) {

    let query = "SELECT * FROM products WHERE id = "  + answers.id

    connection.query(query, function(err, response){
        if (err) {
            throw err;
        }
        
        if (response[0].quantity < answers.quantity) {
            console.log("\nProduct is currently out of stock. \nWe will notify you when the product is available.\n".red)

            closeShop()
        } else {
            console.log("\nThe order is being processed.".blue)

            let updatedQuantity = response[0].quantity - answers.quantity
            let purchaseTotal = response[0].price * answers.quantity
            let sales = purchaseTotal
            let totalSales = sales + purchaseTotal

            connection.query(
                "UPDATE products SET quantity = ?, sales = ? WHERE id = ?",
                [
                    updatedQuantity, totalSales, answers.id
                ],
                function(err, response) {
                    if (err) {
                        throw err;
                    }
                    console.log("\nThank you for your order. Come back soon!".green + "\n");
                    closeShop()
                }
            )
            console.log("\nYour order total is: $".cyan + purchaseTotal)
        }
    })
}

const closeShop = function() {
    connection.end();
}