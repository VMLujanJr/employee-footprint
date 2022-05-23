const db = require('../config/connection.js');
const inquirer = require('inquirer');
require('console.table');

const viewDepartments = () => {
    const sql = `SELECT * FROM departments`

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
    });
};

const viewRoles = () => {
    const sql = `SELECT * FROM roles`

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
};

const viewEmployees = () => {
    const sql = `SELECT * FROM employees`

    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
    })
};

const addDepartment = () => {
    const { deptName } = deptName();
    
    const sql = `
    INSERT INTO departments ('id', 'name')
        VALUES
            ('?', '${deptName}');
    `
    console.table(department);
};

const deptName = () => {
    console.log(`
=====================
Create New Department
=====================
    `)
    return inquirer
        .prompt(
            {
                type: 'input',
                name: 'deptName',
                message: 'What is the new department name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Not working...');
                        return false;
                    }
                }
            }
        )
        .then(response => {
            console.log(response.deptName, 'hey its working');
        });
};

/* const addRole = () => {
    const department = `SELECT * FROM departments`

    console.table(department);
}; */

/* const addEmployee = () => {
    const department = `SELECT * FROM departments`

    console.table(department);
}; */

/* const updateEmployeeRole = () => {
    const department = `SELECT * FROM departments`

    console.table(department);
}; */

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment, 
/*     addRole, 
    addEmployee,
    updateEmployeeRole */
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
` */