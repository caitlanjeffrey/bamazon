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
    console.log("Welcome Karen: ".magenta, connection.threadId)
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
                inventoryQuestions();
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
        inventoryQuestions()
        }
    )
}

function inventoryQuestions() {

    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "Select a Product ID to reorder."
        },
        {
            type: "number",
            name: "quantity",
            message: "Please select a quantity to reorder."
        }
    ]).then(inventoryAnswers => {
        verifyIventoryQuestions(inventoryAnswers)
    });
}

function verifyIventoryQuestions(inventoryAnswers) {

    let query = "SELECT * FROM products WHERE id = " + inventoryAnswers.id

    connection.query(query, function(err, response){
        if (err) {
            throw err;
        }
        
        if (response[0].quantity > 5000) {
            console.log("\nProduct cannot be reordered at this time. \nProduct stock needs to sell.\n".red)

            closeShop()
        } else {
            console.log("\nThe product is being reordered".blue)

            let updatedInventory = response[0].quantity + inventoryAnswers.quantity

            connection.query(
                "UPDATE products SET quantity = ? WHERE id = ?",
                [
                    updatedInventory, inventoryAnswers.id
                ],
                function(err, response) {
                    if (err) {
                        throw err;
                    }
                    console.log("\nThank you for your reorder. Come back soon!".green + "\n");

                    closeShop()
                }
            )
        }
    })
}

function addProduct() {

    connection.query(
        "SELECT * FROM products",
        function(err, results) {
            if (err) {
                throw err;
            }
            newProductQuestions()
        }
    )
}

function newProductQuestions() {

    inquirer.prompt([
        {
            type: "input",
            name: "product",
            message: "Please enter a product name: (example: Bread)"
        },
        {
            type: "input",
            name: "department",
            message: "Please enter a department name: (example: Food - Deli)"
        },
        {
            type: "number",
            name: "price",
            message: "Please enter a price: (example: 3.99)"
        },
        {
            type: "number",
            name: "quantity",
            message: "Please enter an order quantity: (example: 400)"
        }
    ]).then(productAnswers => {
        verifyProductQuestions(productAnswers)
    });
}

//fix set issue
function verifyProductQuestions(productAnswers) {
    
    const v1 = "(" + productAnswers.product + ", "
    const v2 = productAnswers.department + ", "
    const v3 = productAnswers.price + ", "
    const v4  = productAnswers.quantity + ")"
    
    var query = "INSERT INTO products (product, department, price, quantity) VALUES " + v1 + v2 + v3 + v4
    console.log(query)


    var post  = {id: 1, title: 'Hello MySQL'};
var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
  if (error) throw error;
  // Neat!
});
console.log(query.sql);

    connection.query(query, function(err, response){
        if (err) {
            throw err;
        }

        console.log("The product has been added.".green)
        console.table(results)
        closeShop()

    })
}

const closeShop = function() {
    connection.end();
} 