-- Create the SalesAnalytics database
CREATE DATABASE SalesAnalytics;
GO

USE SalesAnalytics;
GO

-- Create Customers table
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) UNIQUE,
    Phone NVARCHAR(20),
    Address NVARCHAR(200),
    City NVARCHAR(50),
    State NVARCHAR(50),
    ZipCode NVARCHAR(20),
    Country NVARCHAR(50),
    CustomerSince DATE,
    CustomerSegment NVARCHAR(20)
);
GO

-- Create Products table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    ProductName NVARCHAR(100) NOT NULL,
    Category NVARCHAR(50),
    SubCategory NVARCHAR(50),
    UnitPrice DECIMAL(10,2) NOT NULL,
    UnitsInStock INT DEFAULT 0,
    ReorderLevel INT DEFAULT 10,
    Discontinued BIT DEFAULT 0,
    LaunchDate DATE
);
GO

-- Insert sample data into Customers table
INSERT INTO Customers (FirstName, LastName, Email, Phone, Address, City, State, ZipCode, Country, CustomerSince, CustomerSegment)
VALUES 
('John', 'Smith', 'john.smith@example.com', '555-123-4567', '123 Main St', 'New York', 'NY', '10001', 'USA', '2020-01-15', 'Premium'),
('Emma', 'Johnson', 'emma.johnson@example.com', '555-234-5678', '456 Oak Ave', 'Los Angeles', 'CA', '90001', 'USA', '2020-02-20', 'Standard'),
('Michael', 'Brown', 'michael.brown@example.com', '555-345-6789', '789 Pine Rd', 'Chicago', 'IL', '60007', 'USA', '2020-03-10', 'Premium');
GO

-- Insert sample data into Products table
INSERT INTO Products (ProductName, Category, SubCategory, UnitPrice, UnitsInStock, ReorderLevel, Discontinued, LaunchDate)
VALUES 
('Laptop Pro X1', 'Electronics', 'Computers', 1299.99, 50, 10, 0, '2021-01-15'),
('Smartphone S22', 'Electronics', 'Mobile Phones', 899.99, 100, 20, 0, '2021-02-10'),
('Wireless Headphones', 'Electronics', 'Audio', 199.99, 75, 15, 0, '2021-03-05');
GO

PRINT 'SalesAnalytics database created successfully with sample data!';
GO
