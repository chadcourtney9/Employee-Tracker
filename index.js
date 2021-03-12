
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
    viewAllMan: "View all by manager",
    addEmp: "Add employee",
    updateEmp: "Update employee role",
    viewAllRoles: "View all roles",
    addNewRole: "Add new role",
    addNewDept: "Add new Department"
};

// role add/change grab
const updateEmp = {
    sales: "Salesperson",
    salesLead: "Saleslead",
    manager: "Manager",
    engineer: "Software Engineer",
    leadEngineer: "Lead Engineer",
    lawyer: "Lawyer",
    accountant: "Accountant",
};

// department add
const addDep = {
    legalDep: "Legal",
    salesDep: "Sales",
    engeeringDep: "Engineering",
    financialDep: "Finances",
};

init = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "What would you like to do?",
            choices: [choiceList.viewAllEmp, choiceList.viewAllDep, choiceList.viewAllMan, choiceList.addEmp, choiceList.updateEmp, choiceList.viewAllRoles, choiceList.addNewRole, choiceList.addNewDept]
        }
    ]).then((answers) => {
        switch (answers.choices) {
            case choiceList.viewAllEmp:
                //function will go here
                break;
            case choiceList.viewAllDep:
                //function will go here
                break;
            case choiceList.viewAllMan:
                //function will go here
                break;
            case choiceList.addEmp:
                addEmployee();
                break;
            case choiceList.updateEmp:
                //function will go here
                break;
            case choiceList.viewAllRoles:
                //function will go here
                break;
            case choiceList.addNewRole:
                addRole();
                break;
            case choiceList.addNewDept:
                //function will go here
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
                            console.log("Inserted new role!")
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
                    console.log("Inserted new employee!")
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
            if (error) console.table(answers)
            else
                console.table("Inserted new department!")
            init();
        })
    })
};