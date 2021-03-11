
-- Departments
INSERT INTO department (name)
VALUE ("Legal")
INSERT INTO department (name)
VALUE ("Sales")
INSERT INTO department (name)
VALUE ("Engineering")
INSERT INTO department (name)
VALUE ("Finance")


-- Roles
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 120000, 3)
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 80000, 3)
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 75000, 1)
INSERT INTO role (title, salary, department_id)
VALUE ("Saleslead", 60000, 2)
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 35000, 2)
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 75000, 4)

-- Managers
INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUE ("Marshall", "Mathers", 1, 1)
INSERT INTO  employee (first_name, last_name, manager_id, department_id)
VALUE ("Itachi", "Uchiha", 2, 2)
INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUE ("Minato", "Uzamaki", 3, 3)
INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUE ("Kaneki", "Ken", 4, 4)

-- Employees
INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUE ("Joe", "Lyons", 1, 5)
INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUE ("Patrick", "DeMarco", 2, 6)
INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUE ("Mike", "Fearnley", 2, 7)
INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUE ("Toni", "Powell", 3, 8)
INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUE ("Tom", "Fallon", 3, 9)
INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUE ("Tim", "Vigneau", 4, 10)