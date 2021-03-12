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
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 80000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 75000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Saleslead", 60000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 35000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 75000, 4);

-- Managers
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Marshall", "Mathers", null, 1 );
INSERT INTO  employee (first_name, last_name, manager_id, role_id)
VALUE ("Itachi", "Uchiha", null, 2 );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Minato", "Uzamaki", null, 3 );
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Kaneki", "Ken", null, 4 );

TRUNCATE employee;
-- Employees
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Joe", "Lyons", 1, 5 ),
("Patrick", "DeMarco", 2, 6),
("Mike", "Fearnley", 2, 7 ),
("Toni", "Powell", 3, 8 ),
("Tom", "Fallon", 3, 9 ),
("Tim", "Vigneau", 4, 10 );