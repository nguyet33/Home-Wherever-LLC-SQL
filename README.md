# Home-Wherever-LLC-SQL

## User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my busines
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Licensing:
[![license](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)

## Table of Contents 
- [Description](#description)
- [My-Task](#My-Task)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
Given a command-line application that allows for user input, when the application is launched, the user is presented with various options including the ability to view all departments, roles, and employees, add new departments, roles, and employees, and update existing employee roles. When the user selects the option to view all departments, they are presented with a formatted table displaying the department names and corresponding IDs. Similarly, selecting the option to view all roles displays the job titles, role IDs, associated department, and salary for each role. If the user chooses to view all employees, a formatted table is presented displaying relevant employee data including employee IDs, first and last names, job titles, departments, salaries, and the manager to which each employee reports. When the user selects the option to add a department, they are prompted to enter the name of the new department, which is then added to the database. Likewise, when adding a new role, the user is prompted to enter the name, salary, and department for the role, which is then added to the database. If the user chooses to add a new employee, they are prompted to enter the employee's first and last name, their role, and their manager. Finally, if the user selects the option to update an employee's role, they are prompted to select the employee to be updated and the new role to be assigned, with this information being promptly updated in the database. This approach offers a streamlined and efficient solution to the problem, removing the need for an HTML file and eliminating the need for repetitive prompts.


## My-Task
My task was to develop a command-line application that allows users to interact with a MySQL database. I had to present users with options such as viewing all departments, roles, and employees, adding new departments, roles, and employees, and updating employee roles.  
  
To accomplish this, I used technologies such as Node.js, MySQL, and Inquirer.js. I had to ensure that the application could retrieve and manipulate data from the MySQL database using queries, and present that data in a readable format to users. Additionally, I had to prompt users for input using Inquirer.js and update the database based on their input.

## Installation:
-Download and clone my repo through Github via https://github.com/nguyet33/Home-Wherever-LLC-SQL  
-OR you can launch the live application at: NO LIVE APPLICATION FOR THIS PROJECT!!!

## Usage:
Step 1: Download the Repo  
Step 2: Npm i to install all dependencies   
Step 3: Run the Source command for schema and seeds  
Step 4: Run "Node index.js" to initiate the inquirer  
Step 5: User input of the prompt desired 

## License:
MIT

## Contributing:
Andy Gaudy - UW Coding Bootcamp Student  
    -Explained promises and awaits   
    <br />
Nhan Duong - UW Coding Bootcamp Student  
    -Assist iquirer prompt  
    <br />
STACKOVERFLOW Community 

## Tests:
None

## Screenshot of Application 
![Screenshot 2023-04-05 at 1 14 28 PM](https://user-images.githubusercontent.com/120419348/230199551-85e036c7-93b5-4bcb-a26e-dc70e3a56676.png)   
  
![Screenshot 2023-04-05 at 1 14 48 PM](https://user-images.githubusercontent.com/120419348/230199565-22f1f8b6-1d28-4c5f-aad4-a89fc8265b49.png)  

## Video 
https://drive.google.com/file/d/1vm7QwpGbU3DANNsDyf71jJ7hPmPiySp-/view  
  
[Untitled_ Apr 5, 2023 1_14 PM.webm](https://user-images.githubusercontent.com/120419348/230199771-a2af84d9-610a-434e-ad29-efd5a2390754.webm)

## Questions:
- Github: [nguyet33](https://github.com/nguyet33)
- Email: tdnguyet33@gmail.com 
