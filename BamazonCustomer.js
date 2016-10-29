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


////FUNCTIONS
var orderItem = function(orderitemID, depcricateAmmount){
	// var ItemID = ItemID;
	
	// var updateAmmount = ammount-;	
	// console.log(orderitemID orderAmmount);


	connection.query('UPDATE products SET StockQuantity=' + depcricateAmmount + ' WHERE ItemID=' + orderitemID, function(error, result) {
		console.log(result);
	});
}


// first display ids, names, and prices of products for sale.
var displayAllProducts = function() {	
	connection.query('SELECT ItemID, ProductName, Price FROM bamazon.products', function(error, result) {
	    	console.log("----------------------------------------------------------------");
	    for (var i = 0; i < result.length; i++) {
	        console.log("ItemID: " + result[i].ItemID + " | " + "Product Name: " + result[i].ProductName + " | " + "Price: $" + result[i].Price);
	    	console.log("----------------------------------------------------------------");
	    	
	    }
	whatToBuyID();
	});
}

// //check to see if there are enogh in stock
// var numberInStock = function(answers){
// }

// The app should then prompt users with two messages.
var whatToBuyID = function(){
		inquirer.prompt([{
// The first should ask them the ID of the product they would like to buy.
			type: "input",
		    name: "ItemID",
			message: "What is the ID of the product they would like to buy?"
		},{
// The second message should ask how many units of the product they would like to buy.
			type: "input",
		    name: "orderAmmount",
			message: "How many would you like to buy?"
		}]).then(function(answers) { 
			// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
			connection.query('SELECT StockQuantity FROM bamazon.products WHERE ItemID ='+ answers.ItemID, function(error, result) {
				
				if (answers.orderAmmount <= result[0].StockQuantity) {
					// However, if your store does have enough of the product, you should fulfill the customer's order.
					console.log("Make the order!");
					var orderitemID = answers.ItemID;
					var depcricateAmmount = result[0].StockQuantity - answers.orderAmmount;
					orderItem(orderitemID, depcricateAmmount);

				} else {
				// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
				console.log("There are only " + result[0].StockQuantity + " items left. Please order " + result[0].StockQuantity + " items or less.");
				}

			})
			displayAllProducts();
		})
}


connection.connect(function(error) {
    if (error) throw error;
    	displayAllProducts();	

})



// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
// If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.
// Challenge #2: Manager View (Next Level)


