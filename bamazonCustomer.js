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
        "SELECT * FROM products",
        function(err, results) {
            if (err) {
                throw err;
            }
            console.log("************************".blue + " New Order ".yellow + "****************************".blue)
            console.table(results)
            askQuestions()
        }
    )
}

const askQuestions = function() {
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
            console.log("Product is currently out of stock. \nWe will notify you when the product is available.".red)
            console.log("******************************************************".blue)

            productsTable()
        } else {
            console.log("The order is being processed.".blue)

            let updatedQuantity = response[0].quantity - answers.quantity
            connection.query(
                "UPDATE products SET quantity = ? WHERE id = ?",
                [
                    updatedQuantity, answers.id
                ],
                function(err, response) {
                    if (err) {
                        throw err;
                    }
                    productsTable()
                }
            )

            let quantityCalc = response[0].price * answers.quantity
            console.log("Your order total is: $".cyan + quantityCalc)
        }
    })
}


