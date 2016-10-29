CREATE SCHEMA `bamazon` ;

CREATE TABLE `bamazon`.`products` (
  `ItemID` INT(11) NOT NULL AUTO_INCREMENT,
  `ProductName` VARCHAR(100) NULL,
  `DepartmentName` VARCHAR(100) NULL,
  `Price` DECIMAL(10,2) NOT NULL,
  `StockQuantity` INT NULL,
  PRIMARY KEY (`ItemID`));


INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Keyboard', 'Computers', 129.33, 123);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Man, Economy and State', 'Books', 19.99, 234);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('55 inch TV', 'Electronics', 814.99, 25);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('shoes', 'Clothes', 124.99, 25);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('chair', 'Home', 129.99, 10);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('flashligh', 'Tools', 59.99, 5);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('glue', 'Crafts', 3.99, 25);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('power cord', 'Tools', 14.99, 1000);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('socks', 'Clothes', 9.99, 50);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Cool Painting', 'Home', 22.99, 100);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Cool Movie', 'Movies', 39.99, 50);
INSERT INTO bamazon.products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Cool Album', 'Music', 29.99, 30);