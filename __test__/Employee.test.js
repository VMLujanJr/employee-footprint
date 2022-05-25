const Employee = require('../lib/assets/js/Employee.js');

test('create an Employee object', () => {
    const employee = new Employee('firstname', 'lastname', 1, 1);

    expect(employee.firstname).toBe('firstname');
    expect(employee.lastname).toBe('lastname');
    expect(employee.roleid).toBe(1);
    expect(employee.managerid).toBe(1);
});