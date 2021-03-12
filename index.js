
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
            case choiceList.viewAllEmp:
                viewAllEmpFunc();
                break;
            case choiceList.viewAllDep:
                viewAllDeptFunc();
                break;
            case choiceList.addEmp:
                addEmployee();
                break;
            case choiceList.updateEmp:
                updateEmpFunc();
                break;
            case choiceList.viewAllRoles:
                viewAllRolesFunc();
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
                    message: "Enter a starting salary for this person"
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

const viewAllEmpFunc = () => {
    connection.query(
        'SELECT first_name, last_name, title, salary FROM employee INNER JOIN roles ON employee.role_id = roles.id;',
        function (error, result, fields) {
            if (error) console.table("error has occure, try again");
            else
                console.table(result);
            init();
        });
};

const viewAllDeptFunc = () => {
    connection.query('SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id ORDER BY employee.id', function (error, result, fields) {
        if (error) console.table("error has occured, try again");
        else
            console.table(result);
        init();
    });
};

const viewAllRolesFunc = () => {
    connection.query("SELECT title FROM roles", function (error, result, fields) {
        if (error) console.table("error has occured, try again");
        else
            console.table(result)
        init();
    })
};

const updateEmpFunc = () => {
    connection.query('SELECT employee.last_name AS value FROM employee', (err, results) => {
        inquirer.prompt([
            {
                type: "list",
                name: "last_name",
                message: "Choose employee to update?",
                choices: results
            },
            {
                type: "input",
                name: "role_id",
                message: "What is this employees new role_id?"
            }
        ]).then((answers) => {
            connection.query(`UPDATE employee SET role_id = ${answers.role_id} WHERE employee.last_name = '${answers.last_name}'`, function (error, data) {
                if (error) console.table(answers);
                else
                    console.table(data);
                init();
            });
        });
    });
};
