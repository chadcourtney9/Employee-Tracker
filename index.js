const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


// makes grabbing choices easier
const choiceList = {
    viewAllEmp: "View all employees",
    viewAllDep: "View all by department",
    viewAllMan: "View all by manager",
    addEmp: "Add employee",
    updateEmp: "Update employee role",
    viewAllRoles: "View all roles"
};
// view all employees
//  view all by department
// view all employees by manager
// add employee
// update employee role
// view all roles

init = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "What would you like to do?",
            choices: [choiceList.viewAllEmp, choiceList.viewAllDep, choiceList.viewAllMan, choiceList.addEmp, choiceList.updateEmp, choiceList.viewAllRoles]
        }
    ]).then((answers) => {
        switch (answers.choices) {
            case choiceList.viewAllEmp:
                break;
            case choiceList.viewAllDep:
                break;
            case choiceList.viewAllMan:
                break;
            case choiceList.addEmp:
                break;
            case choiceList.updateEmp:
                break;
            case choiceList.viewAllRoles:
                break;
        }
    })
};

init();


