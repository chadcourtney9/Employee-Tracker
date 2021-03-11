
-- Departments
INSERT INTO department (name)
VALUE ("Legal")
INSERT INTO department (name)
VALUE ("Sales")
INSERT INTO department (name)
VALUE ("Engineering")
INSERT INTO department (name)
VALUE ("Finance")


-- roles
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

-- managers
