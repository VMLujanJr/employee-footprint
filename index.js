const inquirer = require('inquirer');

const promptManagementOptions = () => {
    console.log(`
==================
Management Options
==================
    `)
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'managementOptions',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    new inquirer.Separator(),
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                    'Update an Employee Role'
                ],
                validate: selectionInput => {
                    if (selectionInput === 'View All Departments') {
                        console.table(`SELECT * FROM departments`);
                    }
                    if (selectionInput === 'View All Roles') {
                        console.table(`SELECT * FROM roles`)
                    }
                    if (selectionInput === 'View All Employees') {
                        console.table(`SELECT * FROM employees`);
                    }
                }
            }
        ])
        .then(selectionInput => {
            console.log(selectionInput);
            return selectionInput;
        });
};

promptManagementOptions()