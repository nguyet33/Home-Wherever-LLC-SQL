const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "homewherever_db",
});

const inquirer = require("inquirer");

async function userPrompt() {
  const { action } = await inquirer.prompt({
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
      "Quit",
    ],
  });

  switch (action) {
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
    case "Quit":
      process.exit();
    default:
      console.log(`Invalid action: ${action}`);
      userPrompt();
  }
}

function viewAllDepartments() {
  connection.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.table(results);
    userPrompt();
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM role", (err, results) => {
    if (err) throw err;
    console.table(results);
    userPrompt();
  });
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
    console.table(results);
    userPrompt();
  });
}

function addDepartment() {
  // code to add a department
  userPrompt();
}

function addRole() {
  // code to add a role
  userPrompt();
}

function addEmployee() {
  // code to add an employee
  userPrompt();
}

function updateEmployeeRole() {
  // code to update an employee's role
  userPrompt();
}

userPrompt();
