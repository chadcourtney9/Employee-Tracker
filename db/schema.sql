CREATE DROP DATABASE IF EXISTS employeetrack_db;
CREATE DATABASE employeetrack_db;
USE employeetrack_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(25)
)

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(25),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCE department(id)
)

CREATE TABLE employee
    id INT NOT NULL AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCE role(id),
    FOREIGN KEY (department_id) REFERENCE department(id)
)

-- SELECT * FROM department
-- SELECT * FROM role
-- SELECT * FROM employee

-- SELECT 
