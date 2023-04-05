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
  inquirer
    .prompt({
      name: "departmentName",
      type: "input",
      message: "Enter the name of the new department:",
    })
    .then((answer) => {
      connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [answer.departmentName],
        (err, result) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(
              `New department "${answer.departmentName}" added successfully!`
            );
          }
          userPrompt();
        }
      );
    });
}

function addRole() {
    // Prompt the user to enter the new role details
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "Enter the title of the new role:",
        },
        {
          name: "salary",
          type: "input",
          message: "Enter the salary of the new role:",
        },
        {
          name: "department",
          type: "list",
          message: "Select the department for the new role:",
          choices: async function () {
            // Query the departments from the database and return them as choices
            const departments = await getDepartments();
            return departments.map((department) => ({
              name: department.name,
              value: department.id,
            }));
          },
        },
      ])
      .then((answer) => {
        // Insert the new role into the database
        connection.query(
          "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
          [answer.title, answer.salary, answer.department],
          (err, result) => {
            if (err) throw err;
            console.log(
              `New role "${answer.title}" added successfully!`
            );
            // Prompt the user to choose another action
            userPrompt();
          }
        );
      });
  }
  

  function getDepartments() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM department", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }


function addEmployee() {
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "Enter the employee's first name:",
      },
      {
        name: "lastName",
        type: "input",
        message: "Enter the employee's last name:",
      },
      {
        name: "role",
        type: "list",
        message: "Choose the employee's role:",
        choices: function () {
          // Retrieve roles from the database
          return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM role", (err, results) => {
              if (err) reject(err);
              // Map the results to an array of role titles
              const roles = results.map((role) => role.title);
              resolve(roles);
            });
          });
        },
      },
      {
        name: "manager",
        type: "list",
        message: "Choose the employee's manager:",
        choices: function () {
          // Retrieve employees from the database
          return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM employee", (err, results) => {
              if (err) reject(err);
              // Map the results to an array of employee names
              const managers = results.map(
                (employee) => `${employee.first_name} ${employee.last_name}`
              );
              // Add an option for no manager
              managers.unshift("None");
              resolve(managers);
            });
          });
        },
      },
    ])
    .then((answers) => {
      // Retrieve the selected role ID from the database
      const query = "SELECT id FROM role WHERE title = ?";
      connection.query(query, [answers.role], (err, results) => {
        if (err) throw err;
        const roleId = results[0].id;

        // Retrieve the selected manager ID from the database
        let managerId = null;
        if (answers.manager !== "None") {
          const [firstName, lastName] = answers.manager.split(" ");
          const query =
            "SELECT id FROM employee WHERE first_name = ? AND last_name = ?";
          connection.query(query, [firstName, lastName], (err, results) => {
            if (err) throw err;
            managerId = results[0].id;

            // Insert the new employee into the database
            const query =
              "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
            connection.query(
              query,
              [answers.firstName, answers.lastName, roleId, managerId],
              (err, results) => {
                if (err) throw err;
                console.log(
                  `${answers.firstName} ${answers.lastName} added to the database.`
                );
                userPrompt();
              }
            );
          });
        } else {
          const query =
            "INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)";
          connection.query(
            query,
            [answers.firstName, answers.lastName, roleId],
            (err, results) => {
              if (err) throw err;
              console.log(
                `${answers.firstName} ${answers.lastName} added to the database.`
              );
              userPrompt();
            }
          );
        }
      });
    });
}

function updateEmployeeRole() {
    // First, retrieve all employee names and their ids
    connection.query("SELECT id, first_name, last_name FROM employee", (err, employees) => {
      if (err) throw err;
  
      // Prompt the user to select an employee to update
      inquirer
        .prompt([
          {
            name: "employeeId",
            type: "list",
            message: "Which employee's role do you want to update?",
            choices: employees.map((employee) => ({
              name: `${employee.first_name} ${employee.last_name}`,
              value: employee.id,
            })),
          },
          {
            name: "newRoleId",
            type: "number",
            message: "Enter the new role ID:",
          },
        ])
        .then((answer) => {
          connection.query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [answer.newRoleId, answer.employeeId],
            (err, result) => {
              if (err) throw err;
              console.log(`Employee role updated successfully!`);
              userPrompt();
            }
          );
        });
    });
  }
  
userPrompt();
