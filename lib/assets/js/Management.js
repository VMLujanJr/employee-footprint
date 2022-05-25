const db = require('../../../config/connection.js');

class Management {
    constructor () {

    }
    viewDepartments() {
        return db.promise().query(`SELECT * FROM departments`);
    }
    viewRoles() {
        return db.promise().query(`SELECT * FROM roles`);
    }
    viewEmployees() {
        return db.promise().query(`SELECT * FROM employees`);
    }
    addDepartment(dept_name) {
        console.log(dept_name, 'what is in here???');
        return db.promise().query(`
        INSERT INTO departments (name)
        VALUES
            ('${dept_name}');
        `);
    }
    addRole() {

    }
    addEmployee() {

    }
    updateEmployeeRole() {

    }
};

/*
`
SELECT roles.*, departments.name AS department_name
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id;
`
`
SELECT *
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id;
`
*/

module.exports = new Management(db);