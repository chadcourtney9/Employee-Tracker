
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const mysql = require("mysql2");
const { type } = require("os");
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employeetrack_DB'
});

// makes grabbing choices easier
const choiceList = {
    viewAllEmp: "View all employees",
    viewAllDep: "View all by department",
    addEmp: "Add employee",
    updateEmp: "Update employee role",
    viewAllRoles: "View all roles",
    addNewRole: "Add new role",
    addNewDept: "Add new Department"
};
// initial function to start the inquirer prompts
init = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "What would you like to do?",
            choices: [choiceList.viewAllEmp, choiceList.viewAllDep, choiceList.addEmp, choiceList.updateEmp, choiceList.viewAllRoles, choiceList.addNewRole, choiceList.addNewDept]
        }
    ]).then((answers) => {
        switch (answers.choices) {
            // this collection of prompts here allows you to call and view all employees departmetns and roles
            case choiceList.viewAllEmp:
                viewAllEmpFunc();
                break;
            case choiceList.viewAllRoles:
                viewAllRolesFunc();
                break;
            case choiceList.viewAllDep:
                viewAllDeptFunc();
                break;
            // calls the update employee function
            case choiceList.updateEmp:
                updateEmpFunc();
                break;
            // this grouping is to add employee, department and role
            case choiceList.addEmp:
                addEmployee();
                break;
            case choiceList.addNewRole:
                addRole();
                break;
            case choiceList.addNewDept:
                addDepartment();
                break;
        }
    })
};

init();
// designed to add a new role into the database, based on the user input
const addRole = () => {
    connection.query('SELECT department.id AS value, department.name FROM department', (err, results) => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "title",
                    message: "Enter the title of the role you would like to add"
                },
                {
                    type: "list",
                    name: "department_id",
                    message: "choose department",
                    choices: results
                },
                {
                    type: "input",
                    name: "salary",
                    message: "Enter a starting salary for this role"
                }
            ]).then((answers) => {
                connection.query(
                    'INSERT INTO roles SET ?', answers, function (error, data) {
                        if (err) console.log("Error occured, try again")
                        else
                            console.log(data)
                        init();
                    }
                )
            });
    })
};
// adds a new employee based on the users input
const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the new employees first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is new employees last name"
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the managers id?"
            },
            {
                type: "input",
                name: "role_id",
                message: "What is the id of their role?"
            }
        ]).then((answers) => {
            connection.query('INSERT INTO employee SET ?', answers, function (error, data) {
                if (error) console.table(answers)
                else
                    console.log(data)
                init();
            }
            );
        })
};
// adds department by name
const addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is then name of the new department?"
        }
    ]).then((answers) => {
        connection.query('INSERT INTO department SET ?', answers, function (error, data) {
            if (error) console.table(answers);
            else
                console.table("Inserted new department!");
            init();
        });
    });
};
// generates a table with all of the employees including their role and salary
const viewAllEmpFunc = () => {
    connection.query(
        // joins employee table and roles table through the role_id and roles.id, allowing to access the salary and title of the role that each employee has
        'SELECT first_name, last_name, title, salary FROM employee INNER JOIN roles ON employee.role_id = roles.id;',
        function (error, result, fields) {
            if (error) console.table("error has occure, try again");
            else
                console.table(result);
            init();
        });
};
// generates all of the departments
const viewAllDeptFunc = () => {
    connection.query('SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id ORDER BY employee.id', function (error, result, fields) {
        if (error) console.table("error has occured, try again");
        else
            console.table(result);
        init();
    });
};
// allows user to view all roles
const viewAllRolesFunc = () => {
    connection.query("SELECT title FROM roles", function (error, result, fields) {
        if (error) console.table("error has occured, try again");
        else
            console.table(result)
        init();
    })
};
// allows user to update roles of employees
const updateEmpFunc = () => {
    // grabs the employees by their last name
    connection.query('SELECT employee.last_name AS value FROM employee', (err, results) => {
        inquirer.prompt([
            {
                type: "list",
                name: "last_name",
                message: "Choose employee to update?",
                // takes the query of last name and shows them as choices
                choices: results
            },
            {
                type: "input",
                name: "role_id",
                message: "What is this employees new role_id?"
            }
        ]).then((answers) => {
            // updates the employees role id that is correllated to the roles in the roles table and changes the role based on the selected user last name
            connection.query(`UPDATE employee SET role_id = ${answers.role_id} WHERE employee.last_name = '${answers.last_name}'`, function (error, data) {
                if (error) console.table(answers);
                else
                    console.table(data);
                init();
            });
        });
    });
};
