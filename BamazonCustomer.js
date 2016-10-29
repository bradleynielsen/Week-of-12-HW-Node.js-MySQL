// <!-- BamazonCustomer.js -->
var mysql = require('mysql');
var inquirer = require('inquirer');

// connect to the server
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "root", //Your password
    database: "bamazon"
})

// first display ids, names, and prices of products for sale.
var displayAllProducts = function() {	
	connection.query('SELECT ItemID, ProductName, Price FROM bamazon.products', function(error, result) {
	    console.log("-----------------------------------");
	    console.log("ItemID" + " | " + "Product Name" + " | " + "Price");
	    for (var i = 0; i < result.length; i++) {
	        console.log(result[i].ItemID + " | " + result[i].ProductName + " | " + result[i].Price);
	    }
	    console.log("-----------------------------------");
	})
}

var whatToBuy = function(){}




connection.connect(function(error) {
    if (error) throw error;
    	displayAllProducts();
})



// The first should ask them the ID of the product they would like to buy.

// The second message should ask how many units of the product they would like to buy.

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
// If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.
// Challenge #2: Manager View (Next Level)


