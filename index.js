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
    engeeringDep: "Engineering",
    financialDep: "Finances",
    salesDep: "Sales",
    legalDep: "Legal",
};

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
                //function will go here
                break;
            case choiceList.viewAllDep:
                //function will go here
                break;
            case choiceList.viewAllMan:
                //function will go here
                break;
            case choiceList.addEmp:
                //function will go here
                break;
            case choiceList.updateEmp:
                //function will go here
                break;
            case choiceList.viewAllRoles:
                //function will go here
                break;
        }
    })
};

init();

// what is the employees first name
// what is the employees last name
// role
// salary?

// remove employee
// insert employees into a list

// insert employees
// change their role 

changeRole = (answers) => {

}

