USE employeetrack_db;

-- Departments
INSERT INTO department (name)
VALUE ("Legal");
INSERT INTO department (name)
VALUE ("Sale");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");


-- Roles
INSERT INTO roles (title, salary, department_id)
VALUE ("Lead Engineer", 120000, 3),
("Software Engineer", 80000, 3),
("Lawyer", 75000, 1),
("Saleslead", 60000, 2),
("Salesperson", 35000, 2),
("Manager", 100000, 2),
("Accountant", 75000, 4);

-- Managers
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Marshall", "Mathers", null, 1 ),
("Itachi", "Uchiha", null, 2 ),
("Minato", "Uzamaki", null, 3 ),
("Kaneki", "Ken", null, 4 );

TRUNCATE employee;
-- Employees
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Joe", "Lyons", 1, 5 ),
("Patrick", "DeMarco", 2, 6),
("Mike", "Fearnley", 2, 7 ),
("Toni", "Powell", 3, 6),
("Tom", "Fallon", 3, 4),
("Tim", "Vigneau", 4, 3 );