const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_db",
});

const inquirer = require("inquirer");

inquirer
  .prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  })
  .then((answer) => {
    // Perform action based on user's choice
    switch (answer.action) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
      }
  });

function viewAllDepartments() {
  connection.query("SELECT * FROM departments", (err, results) => {
    if (err) throw err;
    console.table(results);
    // Prompt the user to choose another action
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM roles", (err, results) => {
    if (err) throw err;
    console.table(results);
    // Prompt the user to choose another action
  });
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employees", (err, results) => {
    if (err) throw err;
    console.table(results);
    // Prompt the user to choose another action
  });
}

